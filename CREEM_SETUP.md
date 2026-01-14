# Creem Payment Integration Setup

This document explains how to configure Creem payment integration for the AI Image Editor.

## Environment Variables

Add the following variables to your `.env.local` file:

```bash
# Creem Payment Configuration
CREEM_API_KEY=your_creem_api_key_here
CREEM_WEBHOOK_SECRET=your_webhook_secret_here
CREEM_TEST_MODE=true
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Getting Your Creem API Keys

1. Sign up at [Creem Dashboard](https://creem.io/dashboard)
2. Navigate to the **Developers** section
3. Copy your API Key
4. Create a webhook endpoint and copy the Webhook Secret

## Setting Up Products in Creem

Create three products in your Creem Dashboard:

### Basic Plan
- **Product ID**: `prod_basic` (use this in the pricing page)
- **Price**: $12/month or $144/year
- **Billing Type**: Recurring
- **Billing Period**: Monthly or Yearly

### Pro Plan
- **Product ID**: `prod_pro`
- **Price**: $39/month or $234/year (50% off yearly)
- **Billing Type**: Recurring
- **Billing Period**: Monthly or Yearly

### Max Plan
- **Product ID**: `prod_max`
- **Price**: $160/month or $960/year (50% off yearly)
- **Billing Type**: Recurring
- **Billing Period**: Monthly or Yearly

## Webhook Configuration

1. Register your webhook endpoint in Creem Dashboard:
   - **Development**: `https://your-ngrok-url.ngrok.io/api/webhook/creem`
   - **Production**: `https://yourdomain.com/api/webhook/creem`

2. The webhook handles these events:
   - `checkout.completed` - When a customer completes checkout
   - `subscription.active` - When a subscription becomes active
   - `subscription.canceled` - When a subscription is canceled
   - `subscription.update` - When subscription details change

## Database Setup (Optional)

If you want to store subscription data, create a table in Supabase:

```sql
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT NOT NULL,
  customer_id TEXT NOT NULL UNIQUE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  subscription_id TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  subscription_status TEXT,
  billing_period TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  canceled_at TIMESTAMPTZ
);

CREATE INDEX idx_user_subscriptions_customer_id ON user_subscriptions(customer_id);
CREATE INDEX idx_user_subscriptions_user_email ON user_subscriptions(user_email);
```

## Testing

1. Set `CREEM_TEST_MODE=true` in your environment variables
2. Visit `/pricing` to see the pricing page
3. Click "Get Started" on any plan to test the checkout flow
4. Use Creem's test mode to simulate payments

## Production Deployment

Before going live:

1. Set `CREEM_TEST_MODE=false`
2. Update `NEXT_PUBLIC_APP_URL` to your production domain
3. Register your production webhook URL in Creem Dashboard
4. Replace test product IDs with production product IDs

## API Routes

- `/api/checkout` - Creates Creem checkout sessions
- `/api/webhook/creem` - Handles Creem webhook events

## Pages

- `/pricing` - Main pricing page with plan selection
- `/pricing/success` - Success page after payment completion
