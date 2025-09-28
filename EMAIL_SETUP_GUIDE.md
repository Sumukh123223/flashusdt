# 📧 EmailJS Setup Guide

## Quick Setup for Email Notifications

Follow these steps to set up email notifications for your website:

## Step 1: Create EmailJS Account

1. **Go to**: [https://www.emailjs.com](https://www.emailjs.com)
2. **Click "Sign Up"** (it's completely free!)
3. **Create account** with your email
4. **Verify your email** (check your inbox and click the verification link)

## Step 2: Connect Your Email Service

1. **Login to EmailJS dashboard**
2. **Click "Email Services"** in the left menu
3. **Click "Add New Service"**
4. **Choose your email provider**:

### Option A: Gmail (Recommended)
- Select **"Gmail"**
- Click **"Connect Account"**
- Login with your Gmail account
- **Copy the Service ID** (looks like: `service_abc123`)

### Option B: Outlook
- Select **"Outlook"**
- Click **"Connect Account"**
- Login with your Outlook account
- **Copy the Service ID**

## Step 3: Create Email Template

1. **Click "Email Templates"** in the left menu
2. **Click "Create New Template"**
3. **Fill in the template**:

**Template Name**: `Transaction Confirmation`

**Subject**: `Transaction Submitted - Flasherr.in`

**Content** (copy this exactly):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">Transaction Submitted Successfully!</h2>
    
    <p>Dear {{user_name}},</p>
    
    <p>Thank you for your transaction submission. We have received your payment details and will process your Flash USDT transfer within 15 minutes.</p>
    
    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Transaction Details:</h3>
        <p><strong>Network:</strong> {{network}}</p>
        <p><strong>Transaction ID:</strong> {{transaction_id}}</p>
        <p><strong>Amount Paid:</strong> {{amount}} USDT</p>
        <p><strong>Flash USDT to Receive:</strong> {{flash_usdt}} Flash USDT</p>
        <p><strong>Your Wallet:</strong> {{wallet_address}}</p>
    </div>
    
    <p>Our team will verify your transaction and send the Flash USDT to your wallet address within 15 minutes.</p>
    
    <p>If you have any questions, please contact our support team.</p>
    
    <hr style="margin: 30px 0;">
    <p style="color: #666; font-size: 12px;">
        This is an automated message from Flasherr.in<br>
        Please do not reply to this email.
    </p>
</div>
```

4. **Click "Save"**
5. **Copy the Template ID** (looks like: `template_xyz789`)

## Step 4: Get Your Public Key

1. **Click "Account"** in the left menu
2. **Find "Public Key"** section
3. **Copy your Public Key** (looks like: `abc123def456`)

## Step 5: Update Your Website

Open the file: `user/js/telegram-notifications.js`

Replace these lines:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
```

With your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';  // Your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';  // Your actual template ID
const EMAILJS_PUBLIC_KEY = 'abc123def456';  // Your actual public key
```

## Step 6: Test It!

1. **Open any final page** (final/9.html, final/7.html, or final/6.html)
2. **Fill out the form** with test data
3. **Click Submit**
4. **Check your email** - you should receive a confirmation email!

## Example Email Your Users Will Receive:

```
Subject: Transaction Submitted - Flasherr.in

Dear Customer,

Thank you for your transaction submission. We have received your payment details and will process your Flash USDT transfer within 15 minutes.

Transaction Details:
• Network: TRON (TRC20)
• Transaction ID: abc123...
• Amount Paid: 50.00 USDT
• Flash USDT to Receive: 1500.00 Flash USDT
• Your Wallet: TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE

Our team will verify your transaction and send the Flash USDT to your wallet address within 15 minutes.

If you have any questions, please contact our support team.

---
This is an automated message from Flasherr.in
Please do not reply to this email.
```

## Troubleshooting:

- **No email received?** Check your spam folder
- **Template not working?** Make sure you copied the template content exactly
- **Service not connected?** Reconnect your email service in EmailJS dashboard
- **Script errors?** Open browser console (F12) to see error messages

## Free Limits:

- **200 emails per month** (free plan)
- **Upgrade to paid plan** if you need more emails

---

**That's it!** Your website now sends professional email confirmations to users! 🎉

## What Happens Now:

1. **User submits form** → Gets confirmation email
2. **You get Telegram notification** → Know about new transactions
3. **Professional experience** → Users trust your service more

Both email and Telegram notifications work together to give you complete transaction management! 📧📱
