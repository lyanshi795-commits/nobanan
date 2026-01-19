import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

export default defineConfig({
    testDir: "./tests",
    timeout: 60_000,
    retries: 0,
    reporter: [["list"]],
    use: {
        baseURL,
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
    },

    // ✅ 本地跑时自动起服务（需要先 build）
    webServer: process.env.PLAYWRIGHT_BASE_URL
        ? undefined // 如果你传了线上 URL，就不要起本地 server
        : {
            command: "pnpm -s start -p 3000",
            url: "http://localhost:3000",
            reuseExistingServer: true,
            timeout: 60_000,
        },
});
