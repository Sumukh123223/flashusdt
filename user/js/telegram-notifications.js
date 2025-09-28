// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8240287573:AAE4NTxWAmBB0GezTFnK-rrMIr5j5BYxb1c'; // Replace with your bot token
const TELEGRAM_CHAT_ID = '8191508290'; // Replace with your chat ID

// Email service configuration (using EmailJS)
const EMAILJS_SERVICE_ID = 'service_o932bxz'; // Replace with your EmailJS service ID (e.g., service_abc123)
const EMAILJS_TEMPLATE_ID = 'template_db6y41l'; // Replace with your EmailJS template ID (e.g., template_xyz789)
const EMAILJS_PUBLIC_KEY = '0Z2AxrijfYWKHDmqV'; // Replace with your EmailJS public key (e.g., abc123def456)

// Send Telegram notification
async function sendTelegramNotification(transactionData) {
    try {
        const message = `
🚨 NEW TRANSACTION SUBMITTED 🚨

📊 Transaction Details:
• Network: ${transactionData.network}
• Transaction ID: ${transactionData.transaction_id}
• Amount: ${transactionData.amount} USDT
• Flash USDT: ${transactionData.flash_usdt}

👤 User Details:
• Email: ${transactionData.email}
• Wallet Address: ${transactionData.wallet_address}

⏰ Time: ${new Date().toLocaleString()}

🔗 Transaction Hash: ${transactionData.transaction_id}
        `;

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            console.log('Telegram notification sent successfully');
            return true;
        } else {
            console.error('Failed to send Telegram notification');
            return false;
        }
    } catch (error) {
        console.error('Error sending Telegram notification:', error);
        return false;
    }
}

// Send email using EmailJS
async function sendUserEmail(transactionData) {
    try {
        // Load EmailJS library if not already loaded
        if (typeof emailjs === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            document.head.appendChild(script);
            
            // Wait for EmailJS to load
            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }

        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);

        const templateParams = {
            email: transactionData.email,
            network: transactionData.network,
            transaction_id: transactionData.transaction_id,
            amount: transactionData.amount,
            flash_usdt: transactionData.flash_usdt,
            wallet_address: transactionData.wallet_address,
            timestamp: new Date().toLocaleString()
        };

        const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        
        if (response.status === 200) {
            console.log('User email sent successfully');
            return true;
        } else {
            console.error('Failed to send user email');
            return false;
        }
    } catch (error) {
        console.error('Error sending user email:', error);
        return false;
    }
}

// Calculate Flash USDT amount
function calculateFlashUSDT(usdtAmount) {
    return (parseFloat(usdtAmount) * 30).toFixed(2);
}

// Get network name from transaction type
function getNetworkName(transactionType) {
    const networks = {
        '6': 'BINANCE (BEP20)',
        '7': 'ETH (ERC20)',
        '9': 'TRON (TRC20)',
        '15': 'POL (Polygon)'
    };
    return networks[transactionType] || 'Unknown Network';
}

// Show success popup
function showSuccessPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        position: relative;
    `;
    
    popup.innerHTML = `
        <div style="font-size: 48px; color: #00D4AA; margin-bottom: 20px;">✓</div>
        <h2 style="color: #333; margin-bottom: 20px; font-size: 24px;">Thank you for buying Flash USDT for Flasher!</h2>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Your Flash USDT transfer will be completed to your provided wallet within 15 minutes. 
            We will update you via your provided email in case of any issues. 
            If any errors occur, we'll contact you through your given email.
        </p>
        <p style="color: #333; font-weight: 600; margin-bottom: 30px;">Thank you for choosing Flasher!</p>
        <button onclick="this.closest('.popup-overlay').remove()" style="
            background: linear-gradient(135deg, #E275FF 0%, #00D4AA 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Close
        </button>
    `;
    
    overlay.className = 'popup-overlay';
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Close popup when clicking outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Show transaction ID error inline
function showTransactionIDError(message) {
    // Find the transaction ID input field
    const txIdInput = document.querySelector('input[name="transaction_id"]');
    if (!txIdInput) return;
    
    // Remove any existing error message
    const existingError = document.querySelector('.transaction-id-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'transaction-id-error';
    errorDiv.style.cssText = `
        color: #ff4757;
        font-size: 14px;
        margin-top: 5px;
        padding: 8px 12px;
        background: rgba(255, 71, 87, 0.1);
        border: 1px solid #ff4757;
        border-radius: 5px;
        text-align: center;
        font-weight: 500;
    `;
    errorDiv.textContent = message;
    
    // Insert error message after the transaction ID input
    txIdInput.parentNode.insertBefore(errorDiv, txIdInput.nextSibling);
    
    // Add red border to input field
    txIdInput.style.borderColor = '#ff4757';
    txIdInput.style.borderWidth = '2px';
    
    // Focus on the input field
    txIdInput.focus();
    
    // Remove error styling when user starts typing
    txIdInput.addEventListener('input', function() {
        txIdInput.style.borderColor = '';
        txIdInput.style.borderWidth = '';
        if (existingError) {
            existingError.remove();
        }
    }, { once: true });
}

// Validate transaction ID based on network type
function validateTransactionID(transactionId, networkType) {
    if (!transactionId || transactionId.trim().length === 0) {
        return { valid: false, message: 'Transaction ID is required' };
    }

    const txId = transactionId.trim();
    
    switch (networkType) {
        case '9': // TRON (TRC20)
            if (txId.length !== 64 || !/^[a-fA-F0-9]{64}$/.test(txId)) {
                return { valid: false, message: 'TRON Transaction ID must be 64 characters long and contain only letters and numbers' };
            }
            break;
            
        case '7': // ETH (ERC20)
            if (txId.length !== 66 || !txId.startsWith('0x') || !/^0x[a-fA-F0-9]{64}$/.test(txId)) {
                return { valid: false, message: 'ETH Transaction ID must start with "0x" and be 66 characters long' };
            }
            break;
            
        case '6': // BINANCE (BEP20)
            if (txId.length !== 66 || !txId.startsWith('0x') || !/^0x[a-fA-F0-9]{64}$/.test(txId)) {
                return { valid: false, message: 'BINANCE Transaction ID must start with "0x" and be 66 characters long' };
            }
            break;
            
        case '15': // POL (Polygon)
            if (txId.length !== 66 || !txId.startsWith('0x') || !/^0x[a-fA-F0-9]{64}$/.test(txId)) {
                return { valid: false, message: 'POLYGON Transaction ID must start with "0x" and be 66 characters long' };
            }
            break;
            
        default:
            return { valid: false, message: 'Invalid network type' };
    }
    
    return { valid: true, message: 'Valid transaction ID' };
}

// Handle form submission
async function handleTransactionSubmission(form, transactionType) {
    try {
        
        // Get form data
        const formData = new FormData(form);
        const transaction_id = formData.get('transaction_id');
        const wallet_address = formData.get('wallet_address');
        const amount = formData.get('amount');
        const email = formData.get('email');

        // Validate required fields
        if (!transaction_id || !wallet_address || !amount || !email) {
            alert('Please fill in all required fields');
            return false;
        }

        // Validate transaction ID format
        const txValidation = validateTransactionID(transaction_id, transactionType);
        if (!txValidation.valid) {
            showTransactionIDError(txValidation.message);
            return false;
        }

        // Validate amount (minimum 33.33 USDT = 1000 Flash USDT)
        const minUSDT = 33.33;
        if (parseFloat(amount) < minUSDT) {
            alert(`Minimum amount is ${minUSDT} USDT`);
            return false;
        }

        const flashUSDT = calculateFlashUSDT(amount);
        const network = getNetworkName(transactionType);

        const transactionData = {
            network,
            transaction_id,
            wallet_address,
            amount,
            flash_usdt: flashUSDT,
            email,
            timestamp: new Date().toISOString()
        };

        // Show loading message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        // Send notifications
        const telegramSuccess = await sendTelegramNotification(transactionData);
        const emailSuccess = await sendUserEmail(transactionData);

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Show success message
        if (telegramSuccess || emailSuccess) {
            showSuccessPopup();
            form.reset();
        } else {
            alert('Transaction submitted, but there was an issue sending notifications. Please contact support.');
        }

        return true;

    } catch (error) {
        console.error('Transaction processing error:', error);
        alert('An error occurred while processing your transaction. Please try again.');
        return false;
    }
}

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all transaction forms
    const forms = document.querySelectorAll('form[id="transaction-form"]');
    
    forms.forEach(form => {
        // Get transaction type from the page URL or form context
        let transactionType = '9'; // Default to TRON
        
        // Try to get transaction type from URL
        const currentPath = window.location.pathname;
        if (currentPath.includes('/final/')) {
            const pathParts = currentPath.split('/');
            const fileName = pathParts[pathParts.length - 1];
            transactionType = fileName.replace('.html', '');
        }
        
        // Add submit event listener
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            handleTransactionSubmission(form, transactionType);
        });
    });
});
