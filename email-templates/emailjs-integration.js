// EmailJS Integration for Transaction Failed Email
// Add this to your existing JavaScript files

/**
 * Send transaction failed email when user places order below minimum amount
 * @param {Object} orderData - Order details
 * @param {string} orderData.userName - User's name
 * @param {string} orderData.userEmail - User's email
 * @param {number} orderData.orderAmount - Amount user tried to order
 * @param {number} orderData.minimumAmount - Minimum required amount
 * @param {string} orderData.walletAddress - Your wallet address
 */
async function sendTransactionFailedEmail(orderData) {
    try {
        // Calculate remaining amount
        const remainingAmount = (orderData.minimumAmount - orderData.orderAmount).toFixed(2);
        
        // Prepare template parameters
        const templateParams = {
            user_name: orderData.userName || 'Valued Customer',
            user_email: orderData.userEmail,
            order_amount: orderData.orderAmount.toString(),
            minimum_amount: orderData.minimumAmount.toString(),
            remaining_amount: remainingAmount,
            wallet_address: orderData.walletAddress || 'TCM374m7LuwxAgpSM1yNn3uU5HwZtPUpEU',
            transaction_date: new Date().toLocaleString()
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            'service_o932bxz', // Your EmailJS service ID
            'template_transaction_failed', // Template ID for transaction failed email
            templateParams
        );

        if (response.status === 200) {
            console.log('✅ Transaction failed email sent successfully');
            return true;
        } else {
            console.error('❌ Failed to send transaction failed email');
            return false;
        }
    } catch (error) {
        console.error('❌ Error sending transaction failed email:', error);
        return false;
    }
}

/**
 * Check if order amount meets minimum requirement
 * @param {number} orderAmount - Amount user wants to order
 * @param {number} minimumAmount - Minimum required amount
 * @returns {Object} - Result with success status and details
 */
function validateOrderAmount(orderAmount, minimumAmount = 1) {
    if (orderAmount < minimumAmount) {
        return {
            valid: false,
            orderAmount: orderAmount,
            minimumAmount: minimumAmount,
            remainingAmount: (minimumAmount - orderAmount).toFixed(2),
            message: `Order amount ${orderAmount} USDT is below minimum requirement of ${minimumAmount} USDT`
        };
    }
    
    return {
        valid: true,
        message: 'Order amount meets minimum requirement'
    };
}

/**
 * Example usage in your payment form submission
 */
function handleOrderSubmission(formData) {
    const orderAmount = parseFloat(formData.amount);
    const minimumAmount = 1; // Your minimum amount
    
    // Validate order amount
    const validation = validateOrderAmount(orderAmount, minimumAmount);
    
    if (!validation.valid) {
        // Show error message to user
        showCustomPopup('error', 'Order Below Minimum', validation.message);
        
        // Send transaction failed email
        const orderData = {
            userName: formData.name || 'Customer',
            userEmail: formData.email,
            orderAmount: orderAmount,
            minimumAmount: minimumAmount,
            walletAddress: 'TCM374m7LuwxAgpSM1yNn3uU5HwZtPUpEU' // Your wallet address
        };
        
        sendTransactionFailedEmail(orderData);
        
        return false;
    }
    
    // Proceed with normal order processing
    return true;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sendTransactionFailedEmail,
        validateOrderAmount,
        handleOrderSubmission
    };
}
