// Notification Configuration
// Update these values with your actual credentials

const NOTIFICATION_CONFIG = {
    // EmailJS Configuration
    EMAILJS: {
        USER_ID: 'YOUR_EMAILJS_USER_ID',        // Get from EmailJS Account page
        SERVICE_ID: 'YOUR_SERVICE_ID',          // Get from EmailJS Email Services
        TEMPLATE_ID: 'YOUR_TEMPLATE_ID'         // Get from EmailJS Email Templates
    },
    
    // Telegram Configuration
    TELEGRAM: {
        BOT_TOKEN: 'YOUR_BOT_TOKEN',            // Get from @BotFather
        CHAT_ID: 'YOUR_CHAT_ID'                 // Get from Telegram API
    },
    
    // Wallet Configuration
    WALLET: {
        ADDRESS: 'THTirtEHsqGUKHtvtkWUJRNskNbBbX7MSQ'  // Your wallet address
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NOTIFICATION_CONFIG;
}
