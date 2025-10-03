# 🔗 Flasherr Gateway Connection Guide

## ✅ **Updated Gateway Configurations**

Your payment gateway connections have been updated to use your new domain!

---

## 🔧 **Payment Gateway Status**

### **OxaPay Configuration Updated:**
- ✅ **Gateway**: OxaPay (White Label)
- ✅ **API Key**: `4MWPM6-VX5YQN-EK9JAP-0IDZ6A`
- ✅ **New Callback URL**: `https://flasherr.online/callback`
- ✅ **New Return URLs**: `https://flasherr.online/final/`

### **Payment Files Updated:**
- ✅ `final/6.html` - TRX Payment Gateway
- ✅ `final/7.html` - ETH Payment Messenger
- ✅ `final/9.html` - TRON Gateway

---

## 🌐 **Critical Gateway Settings**

### **1. Callback URL Configuration:**
```
Old: https://flashusdt-nu.vercel.app/callback
New: https://flasherr.online/callback
```

### **2. Return URL Configuration:**
```
Old: https://flashusdt-nu.vercel.app/final/
New: https://flasherr.online/final/
```

### **3. What Gets Updated:**
- **Payment Callbacks** - Where OxaPay sends payment notifications
- **Return URLs** - Where users are redirected after payment
- **Navigation Links** - All internal site links
- **Email Addresses** - Support contact information

---

## 🚨 **Important Gateway Checklist**

### **Before Adding New Domain:**
1. ✅ Update Vercel project domains
2. ✅ Update all gateway callback URLs
3. ✅ Update return URLs
4. ✅ Test payment flow

### **After Domain Change:**
1. 🔄 **Deploy Updated Files**
2. 🔄 **Test Payment Gateway**
3. 🔄 **Verify Callbacks Work**
4. 🔄 **Check Email Notifications**

---

## 🔄 **Deploying Gateway Updates**

```bash
# Deploy all changes
cd "/Users/sumukhadministrator/Desktop/no delete /flsh usdt al file /flasherr.in"
./deploy.sh

# Or manually:
vercel --prod --yes
```

---

## 📧 **Gateway Email Configuration**

### **Updated Support Email:**
```
Old: support@flashusdt.com
New: support@flasherr.online
```

### **Email Templates Updated:**
- ✅ Transaction success emails
- ✅ Transaction failed emails  
- ✅ User notifications
- ✅ Support contact info

---

## 🧪 **Testing Gateway Connections**

### **Test Payment Flow:**
1. **Go to payment page** → `https://flasherr.online/category.html`
2. **Select payment method** → Choose network (TRX/ETH/TRON)
3. **Make test payment** → Verify callback works
4. **Check email notifications** → Ensure emails arrive
5. **Test return URL** → Verify redirect works

### **Gateway Verification:**
```bash
# Check callback endpoint
curl -I https://flasherr.online/callback

# Verify deployment
vercel ls

# Check logs
vercel logs
```

---

## 🛠 **OxaPay Merchant Dashboard**

### **Update Merchant Settings:**
1. **Login to OxaPay**: https://merchant.oxapay.com
2. **Go to Settings**: Webhook & Callback
3. **Update URLs**:
   - Callback URL: `https://flasherr.online/callback`
   - If adding new domain: `https://yournewdomain.com/callback`

### **Gateway API Endpoints:**
```
Base URL: https://api.oxapay.com/v1/payment/
Invoice: /invoice
Callback: /callback
Status: /invoice-status
```

---

## 🔐 **Security Settings**

### **SSL/TLS Requirements:**
- ✅ **HTTPS Required**: All gateway URLs must use HTTPS
- ✅ **SSL Certificate**: Automatically handled by Vercel
- ✅ **Domain Validation**: Gateway checks domain SSL status

### **Webhook Validation:**
- ✅ **Callback Security**: Verify incoming webhooks
- ✅ **Payment Verification**: Validate payment amounts
- ✅ **User Verification**: Check email/wallet validity

---

## 📊 **Monitoring Gateway Health**

### **Check Gateway Status:**
```bash
# Vercel deployment status
vercel ls

# Domain connectivity
curl -I https://flasherr.online/callback

# Payment gateway test
curl -X GET "https://api.oxapay.com/v1/payment/methods" \
  -H "merchant_api_key: 4MWPM6-VX5YQN-EK9JAP-0IDZ6A"
```

### **Webhook Monitoring:**
- Monitor callback endpoints
- Check payment notifications
- Verify email delivery
- Track failed transactions

---

## 🎯 **For Adding New Domain**

When you add a new domain (e.g., `yournewdomain.com`):

### **1. Update Gateway URLs:**
```javascript
callback_url: 'https://yournewdomain.com/callback'
return_url: 'https://yournewdomain.com/final/[page].html'
```

### **2. Update All HTML Files:**
```bash
find . -name "*.html" -exec sed -i '' 's|https://flasherr.online|https://yournewdomain.com|g' {} \;
```

### **3. Deploy Changes:**
```bash
./deploy.sh
```

### **4. Test Thoroughly:**
- Payment flow
- Email notifications  
- Callback functionality
- Return URL redirects

---

## 🆘 **Troubleshooting**

### **Gateway Not Working?**
1. Check domain SSL certificate
2. Verify callback URL accessibility
3. Check OxaPay merchant settings
4. Monitor webhook logs

### **Payments Not Processing?**
1. Verify API key is correct
2. Check payment URLs are updated
3. Test with small amounts first
4. Check webhook responses

### **Email Notifications Missing?**
1. Verify support email is updated
2. Check email service configuration
3. Test email sending functionality
4. Check spam folders

---

**🎉 Your Flasherr gateway is now properly configured and ready for your new domain!**
