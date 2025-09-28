# Notification Setup Guide

## 📧 Email Notifications (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** Payment Confirmation - Flash USDT Purchase

**Content:**
```
Dear Customer,

Your Flash USDT purchase has been confirmed!

Transaction Details:
- Transaction ID: {{transaction_id}}
- Amount Paid: {{amount}} USDT
- Flash USDT Amount: {{flash_amount}}
- Wallet Address: {{wallet_address}}
- Email: {{to_email}}
- Date: {{date}}

Your Flash USDT will be transferred to your wallet within 15 minutes.

Thank you for choosing Flasher!

Best regards,
Flasher Team
```

4. Save the template and note down your **Template ID**

### Step 4: Get User ID
1. Go to "Account" in EmailJS dashboard
2. Copy your **User ID**

---

## 📱 Telegram Notifications

### Step 1: Create Telegram Bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow instructions to create your bot
4. Save your **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Chat ID
1. Add your bot to a group or start a chat with it
2. Send any message to the bot
3. Go to: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for `"chat":{"id":-123456789}` in the response
5. Save your **Chat ID** (can be negative for groups)

---

## 🔧 Configuration

### Update EmailJS Settings
Replace these placeholders in your HTML files:
- `YOUR_EMAILJS_USER_ID` → Your EmailJS User ID
- `YOUR_SERVICE_ID` → Your EmailJS Service ID  
- `YOUR_TEMPLATE_ID` → Your EmailJS Template ID

### Update Telegram Settings
Replace these placeholders in your HTML files:
- `YOUR_BOT_TOKEN` → Your Telegram Bot Token
- `YOUR_CHAT_ID` → Your Telegram Chat ID

---

## 📁 Files to Update
- `final/6.html`
- `final/7.html` 
- `final/9.html`
- `callback.html`

---

## 🧪 Testing
1. Make a test payment
2. Check if you receive email notification
3. Check if you receive Telegram notification
4. Verify all transaction details are correct

---

## 🆘 Troubleshooting

### Email Not Working?
- Check EmailJS service is active
- Verify template variables match
- Check browser console for errors

### Telegram Not Working?
- Verify bot token is correct
- Check chat ID is correct
- Make sure bot is added to chat/group
- Check browser console for errors

### Both Not Working?
- Check internet connection
- Verify all credentials are correct
- Check browser console for detailed errors
