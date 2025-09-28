# Email Template Variables

## Transaction Failed Template Variables

Replace these placeholders in your email templates:

### Required Variables:
- `{{USER_NAME}}` - Customer's name
- `{{ORDER_AMOUNT}}` - Amount user tried to order (e.g., "0.05")
- `{{MINIMUM_AMOUNT}}` - Minimum required amount (e.g., "1")
- `{{REMAINING_AMOUNT}}` - Amount user needs to pay (calculated: MINIMUM_AMOUNT - ORDER_AMOUNT)
- `{{WALLET_ADDRESS}}` - Your wallet address for receiving payments
- `{{TRANSACTION_DATE}}` - Date when transaction was attempted

### Example Usage:
```
User places order: 0.05 USDT
Minimum required: 1 USDT
Remaining amount: 0.95 USDT
```

### Email Service Integration:

#### For EmailJS:
```javascript
const templateParams = {
    user_name: 'John Doe',
    order_amount: '0.05',
    minimum_amount: '1',
    remaining_amount: '0.95',
    wallet_address: 'TCM374m7LuwxAgpSM1yNn3uU5HwZtPUpEU',
    transaction_date: new Date().toLocaleString()
};
```

#### For Other Email Services:
Replace the variables in the HTML/text templates with actual values before sending.

### Customization:
- Change `support@flashusdt.com` to your actual support email
- Update wallet address to your actual receiving address
- Modify minimum amount as per your business requirements
- Customize colors and branding to match your website
