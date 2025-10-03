# 📧 Flasherr Email Forwarding Setup Guide

## ✅ **Current Email Status**
- **Domain**: `flasherr.online`
- **Primary Email**: `support@flasherr.online` ✅ Created
- **Password**: `Asdfghjkl123@`
- **Webmail Access**: `https://bigrock.titan.email/`
- **Target**: Forward `info@flasherr.online` to your Gmail

---

## 🎯 **Quick Setup (5 Minutes)**

### **Step 1: Titan Control Panel**
1. **Go to**: Titan Email Control Panel (already open)
2. **Click**: "Forwardinga Accounts" (left sidebar)
3. **Add New Forwarding**: 
   - FROM: `info@flasherr.online`
   - TO: `yourgmail@gmail.com`

### **Step 2: Verify Settings**
1. **Test Email**: Send test email to `info@flasherr.online`
2. **Check**: Email arrives in your Gmail inbox
3. **Configure**: Add sender name as "Flasherr Support"

---

## 🔧 **Detailed Setup Instructions**

### **Option A: Forwarding Accounts (Recommended)**
```
1. Titan Panel → Forwarding Accounts
2. Add Forwarding Account
3. Email Address: info@flasherr.online
4. Forward to: yourgmail@gmail.com
5. Keep Copy: Yes (optional)
6. Save Changes
```

### **Option B: Catch-all Email**
```
1. Titan Panel → Catch-all Email
2. Set Destination: yourgmail@gmail.com
3. This forwards ALL emails to any@flasherr.online
4. Save Changes
```

---

## 📱 **Gmail Integration**

### **Send FROM your domain email:**

1. **Gmail Settings** → **Accounts and Import**
2. **Add another email address**
3. **Enter**: `info@flasherr.online`
4. **Verify** (check Titan webmail for verification code)
5. **Use Gmail interface** to send emails as `info@flasherr.online`

### **Benefits:**
- ✅ Use familiar Gmail interface
- ✅ Mobile app access
- ✅ Spam filtering included
- ✅ Calendar and contacts sync

---

## 🌐 **Website Email Configuration**

### **Updated Email References:**
```html
<!-- Contact forms now use info@flasherr.online -->
support@flasherr.online → info@flasherr.online
```

### **Email Templates Updated:**
- ✅ Transaction notifications
- ✅ User support emails
- ✅ Payment confirmations
- ✅ Contact forms

---

## 📊 **Email Account Structure**

### **Recommended Setup:**
```
📧 info@flasherr.online
   └── Forwards to: yourgmail@gmail.com ✅
   
📧 support@flasherr.online  
   └── Direct webmail (admin) ✅
   
📧 Admin@flasherr.online
   └── Catch-all destination
```

### **Usage Pattern:**
- **Customer emails** → `info@flasherr.online` → Your Gmail
- **Admin emails** → `support@flasherr.online` → Webmail
- **Backup/admin** → Direct webmail access

---

## 🔐 **Email Security Best Practices**

### **Password Security:**
- ✅ Use strong passwords: `Asdfghjkl123@`
- ✅ Enable 2FA if available in Titan
- ✅ Change passwords regularly

### **Email Reputation:**
I noticed in your screenshot: **"Email reputation is currently poor"**

**To Fix This:**
1. **Click "Improve Email Reputation"** button
2. **Add DKIM records** to domain DNS
3. **This prevents emails going to spam**

---

## 🧪 **Testing Your Setup**

### **Test Email Forwarding:**
```bash
# Send test email to info@flasherr.online
# Check if it arrives in your Gmail

# Test from different source:
# Use another email service to send to info@flasherr.online
```

### **Test Reply Functionality:**
1. **Receive email** in Gmail (forwarded from info@flasherr.online)
2. **Reply** using Gmail
3. **Choose from address**: info@flasherr.online
4. **Verify** recipient sees correct sender

---

## 📱 **Mobile Setup**

### **Gmail Mobile App:**
- ✅ Already configured
- ✅ Automatically receives forwarded emails
- ✅ Send emails AS flasherr.online

### **Email Client Apps:**
```bash
IMAP Settings:
Server: bigrock.titan.email
Port: 993 (SSL)
Username: support@flasherr.online
Password: Asdfghjkl123@
```

---

## 🚀 **Deploy Updated Website**

### **Deploy email changes:**
```bash
cd "/Users/sumukhadministrator/Desktop/no delete /flsh usdt al file /flasherr.in"
./deploy.sh
```

### **Verify on website:**
- Contact forms now use `info@flasherr.online`
- Email notifications will reach your Gmail
- Customer emails forwarded properly

---

## 📋 **Quick Action Checklist**

### **Immediate Steps:**
1. ✅ **Set up forwarding**: info@flasherr.online → Gmail
2. ✅ **Test email flow**: Send test email
3. ✅ **Configure Gmail sender**: Add info@flasherr.online as sender
4. ✅ **Update email reputation**: Add DKIM records
5. ✅ **Deploy website**: Updated email addresses live

### **Long-term Maintenance:**
- Monitor email deliverability
- Check spam folders regularly  
- Update passwords quarterly
- Backup important emails

---

## 🆘 **Troubleshooting**

### **Emails Not Forwarding?**
1. Check Titan forwarding settings
2. Verify Gmail address is correct
3. Check spam folder in Gmail
4. Test with different source email

### **Gmail Setup Issues de ?**
1. Check Gmail account permissions
2. Verify sender verification
3. Resend verification email if needed

### **Website Forms Not Working?**
1. Check contact form configuration
2. Verify email addresses in templates
3. Test contact form submission

---

**🎉 Setup Complete! All emails to info@flasherr.online will now be forwarded to your Gmail address!**
