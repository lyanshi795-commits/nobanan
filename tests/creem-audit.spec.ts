import { test, expect } from "@playwright/test";

const REQUIRED_PAGES = [
    "/",
    "/pricing",
    "/terms",
    "/privacy",
    "/contact",
];

const AUTH_PAGES = [
    "/login",
    "/manage-subscription",
    "/auth/auth-code-error",
];

// 你可以按需加/删
const RISKY_KEYWORDS = [
    "Gemini",
    "Nano Banana Pro",
    "Official",
    "endorsed by",
    "Powered by Google", // 避免误导
];

const GOOD_EMAIL = "leo@nobanan.online";
const BAD_EMAIL_DOMAIN = "nobanban.online";

// 尝试自动找到 "生成/开始编辑" 的按钮（你站点按钮可能不同，所以用正则）
const CTA_SELECTORS = [
    'text=/Generate/i',
    'text=/Start Editing/i',
    'text=/Start Generating/i',
    'text=/Try Now/i',
    'text=/Get Started/i',
];

test.describe("Creem compliance audit (auth + dead links)", () => {
    test("Required pages must be reachable (200-399)", async ({ page, baseURL }) => {
        for (const path of REQUIRED_PAGES) {
            const res = await page.goto(path, { waitUntil: "domcontentloaded" });
            expect(res, `Expected ${path} to return a response`).not.toBeNull();
            const status = res!.status();
            expect(
                status,
                `Expected ${baseURL}${path} status < 400, got ${status}`
            ).toBeLessThan(400);
        }
    });

    test("Auth-related pages must be reachable (200-399)", async ({ page, baseURL }) => {
        for (const path of AUTH_PAGES) {
            const res = await page.goto(path, { waitUntil: "domcontentloaded" });
            expect(res, `Expected ${path} to return a response`).not.toBeNull();
            const status = res!.status();
            expect(
                status,
                `Expected ${baseURL}${path} status < 400, got ${status}`
            ).toBeLessThan(400);
        }
    });

    test("Header links must not be dead (no 404 / no broken anchors)", async ({ page, baseURL }) => {
        await page.goto("/", { waitUntil: "domcontentloaded" });

        // ✅ 抓取 header 的所有 <a href>
        const headerLinks = await page.$$eval("header a[href]", (as) =>
            as
                .map((a) => (a as HTMLAnchorElement).getAttribute("href") || "")
                .filter(Boolean)
        );

        // 只测内部链接（避免外链导致误报）
        const internal = Array.from(new Set(headerLinks))
            .filter((h) => h.startsWith("/") || h.startsWith("#"));

        // 没链接也算问题（Header 空的也会被认为不成熟）
        expect(internal.length, "Header has no internal links").toBeGreaterThan(0);

        for (const href of internal) {
            if (href.startsWith("#")) {
                // Anchor 检查：首页必须真的有对应 id
                const id = href.slice(1);
                const el = page.locator(`#${CSS.escape(id)}`);
                await expect(el, `Missing anchor section: ${href}`).toHaveCount(1);
                continue;
            }

            if (href.includes("#")) {
                const [path, hash] = href.split("#");
                const res = await page.goto(path || "/", { waitUntil: "domcontentloaded" });
                expect(res, `Expected ${href} to return a response`).not.toBeNull();
                expect(res!.status(), `${href} returned ${res!.status()}`).toBeLessThan(400);
                const el = page.locator(`#${CSS.escape(hash)}`);
                await expect(el, `Missing anchor section: #${hash} in ${path}`).toHaveCount(1);
                continue;
            }

            const res = await page.goto(href, { waitUntil: "domcontentloaded" });
            expect(res, `Expected ${href} to return a response`).not.toBeNull();
            expect(res!.status(), `${baseURL}${href} returned ${res!.status()}`).toBeLessThan(400);
        }
    });

    test("Footer links must not be dead (no 404)", async ({ page, baseURL }) => {
        await page.goto("/", { waitUntil: "domcontentloaded" });

        const footerLinks = await page.$$eval("footer a[href]", (as) =>
            as
                .map((a) => (a as HTMLAnchorElement).getAttribute("href") || "")
                .filter(Boolean)
        );

        const internal = Array.from(new Set(footerLinks))
            .filter((h) => h.startsWith("/") || h.startsWith("#"));

        for (const href of internal) {
            if (href.startsWith("#")) continue; // footer anchor 不强制

            const res = await page.goto(href, { waitUntil: "domcontentloaded" });
            expect(res, `Expected ${href} to return a response`).not.toBeNull();
            expect(res!.status(), `${baseURL}${href} returned ${res!.status()}`).toBeLessThan(400);
        }
    });

    test("Authentication sanity: logged-out users must be guided to login", async ({ page }) => {
        // ✅ 清空 cookie/localStorage，模拟全新访客
        await page.context().clearCookies();

        // ✅ 加强等待策略，防止线上慢
        await page.goto("/", { waitUntil: "domcontentloaded" });
        await page.waitForLoadState("networkidle");

        // ✅ 使用多重选择器定位 Start Editing 按钮（兼容新旧版本）
        const cta = page.locator('[data-testid="cta-start-editing"], [aria-label="Start Editing"], a:has-text("Start Editing")').first();
        await expect(cta).toBeVisible({ timeout: 120_000 });
        await cta.click();

        // ✅ 验证跳转到登录页或 dashboard
        await expect(page).toHaveURL(/\/login|\/dashboard/i, { timeout: 30_000 });
    });

    test("No obvious compliance red flags: risky keywords + email typo", async ({ page }) => {
        await page.goto("/", { waitUntil: "domcontentloaded" });
        const html = await page.content();

        // ✅ 禁止风险词
        for (const k of RISKY_KEYWORDS) {
            expect(html.toLowerCase(), `Homepage contains risky keyword: ${k}`).not.toContain(
                k.toLowerCase()
            );
        }

        // ✅ 邮箱域名拼错检查
        expect(html, "Homepage contains bad email domain typo").not.toContain(BAD_EMAIL_DOMAIN);

        // ✅ 必须出现一个可联系邮箱（你指定 leo 开头）
        expect(html, "Support email missing on homepage").toContain(GOOD_EMAIL);
    });

    test("Policy pages must include support email", async ({ page }) => {
        for (const path of ["/contact", "/privacy", "/terms"]) {
            await page.goto(path, { waitUntil: "domcontentloaded" });
            const content = await page.content();
            expect(content, `${path} missing support email`).toContain(GOOD_EMAIL);
            expect(content, `${path} contains bad email domain typo`).not.toContain(BAD_EMAIL_DOMAIN);
        }
    });
});
