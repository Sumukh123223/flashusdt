# Email Template Variables - Flasherr Style

## Transaction Failed Template Variables

Replace these placeholders in your email templates:

### Required Variables:
- `{{user_name}}` - Customer's name
- `{{order_amount}}` - Amount user tried to order (e.g., "0.05")
- `{{minimum_amount}}` - Minimum required amount (e.g., "1")
- `{{remaining_amount}}` - Amount user needs to pay (calculated: minimum_amount - order_amount)
- `{{wallet_address}}` - Your wallet address for receiving payments

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
    wallet_address: 'TCM374m7LuwxAgpSM1yNn3uU5HwZtPUpEU'
};
```

#### For Other Email Services:
Replace the variables in the HTML/text templates with actual values before sending.

### Design Features:
- **Dark Theme**: Matches your website's dark gradient background
- **Brand Colors**: Uses your purple (#E275FF) and teal (#00D4AA) gradients
- **Mobile Responsive**: Optimized for all devices
- **Professional Layout**: Clean, modern design with proper spacing
- **Clear Hierarchy**: Easy to read with proper typography

### Customization:
- Change `support@flashusdt.com` to `info@flasherr.online` (already updated)
- Update wallet address to your actual receiving address
- Modify minimum amount as per your business requirements
- Colors match your existing Flasherr branding
