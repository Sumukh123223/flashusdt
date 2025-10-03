#!/bin/bash

# Flasherr Project Deployment Script
echo "🚀 Starting Flasherr deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Please install it first:"
    echo "npm i -g vercel"
    exit 1
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod

# Check deployment status
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site should be live at: https://flasherr.online"
    echo "📋 To add a new domain:"
    echo "   1. Go to Vercel Dashboard → Settings → Domains"
    echo "   2. Click 'Add Domain' and enter your new domain"
    echo "   3. Update DNS records as shown in Vercel"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
