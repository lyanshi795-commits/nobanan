# Creem 产品配置步骤

## ✅ 已完成
- [x] 环境变量已配置
  - CREEM_API_KEY: creem_test_1aoneZdhDbA4BN8qYCn5i7
  - CREEM_WEBHOOK_SECRET: whsec_efn9sU58wy9qzZEUIcjC3
  - CREEM_TEST_MODE: true
  - NEXT_PUBLIC_APP_URL: http://localhost:3000

## 📝 下一步：在 Creem Dashboard 创建产品

访问：https://creem.io/dashboard/products

### 产品 1: Basic Plan
```
名称: Basic
价格: $12.00 USD
计费类型: Recurring (订阅)
计费周期: Monthly (每月)
描述: Perfect for individuals getting started
```

创建后，复制 Product ID（格式：`prod_xxxxx`）

### 产品 2: Pro Plan (推荐)
```
名称: Pro
价格: $39.00 USD
计费类型: Recurring (订阅)
计费周期: Monthly (每月)
描述: For professionals and creators
```

### 产品 3: Max Plan
```
名称: Max
价格: $160.00 USD
计费类型: Recurring (订阅)
计费周期: Monthly (每月)
描述: For teams and power users
```

### 年付版本（可选）
如果 Creem 支持，为每个产品创建年付版本，价格为：
- Basic: $144/year
- Pro: $234/year  
- Max: $960/year

## 🔧 更新代码

获取 Product IDs 后，更新 `app/pricing/page.tsx` 第 20-56 行：

```typescript
const pricingPlans = [
  {
    name: "Basic",
    // ... 其他配置
    productId: "prod_YOUR_BASIC_ID", // 👈 替换这里
  },
  {
    name: "Pro",
    // ... 其他配置
    productId: "prod_YOUR_PRO_ID", // 👈 替换这里
  },
  {
    name: "Max",
    // ... 其他配置
    productId: "prod_YOUR_MAX_ID", // 👈 替换这里
  },
]
```

## 🧪 测试支付流程

1. 访问 http://localhost:3000/pricing
2. 点击任意 "Get Started" 按钮
3. 你会被重定向到 Creem checkout 页面
4. 使用 Creem 测试卡号完成支付
5. 支付成功后会跳转到 /pricing/success 页面

## 🔗 Webhook 配置（可选）

如果需要接收支付事件通知：

1. 使用 ngrok 暴露本地服务器：
   ```bash
   ngrok http 3000
   ```

2. 在 Creem Dashboard > Developers > Webhooks 添加：
   ```
   Endpoint URL: https://your-ngrok-url.ngrok.io/api/webhook/creem
   Events: 选择所有订阅相关事件
   ```

## 📊 数据库（可选）

如果要存储订阅数据，在 Supabase 中创建表：

```sql
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT NOT NULL,
  customer_id TEXT NOT NULL UNIQUE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  subscription_id TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  billing_period TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  canceled_at TIMESTAMPTZ
);
```

## 🎉 完成！

所有配置完成后，你的支付系统就可以正常工作了！
