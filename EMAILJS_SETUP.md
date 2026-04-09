# EmailJS Setup Guide for Knoxpay Join Us Form

## Overview
This guide will help you set up EmailJS to handle form submissions from the Join Us page.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Founders' Circle Application - {{fullName}}

**Content:**
```
New application received from the Knoxpay website:

Full Name: {{fullName}}
Business Name: {{businessName}}
Postcode: {{postcode}}
Email: {{email}}
Phone: {{phone}}
Ready to Partner: {{readyToPartner}}
Business Category: {{businessCategory}}
Monthly Turnover: {{monthlyTurnover}}
Additional Info: {{additionalInfo}}
Consent Given: {{consent}}

---
This email was sent from the Knoxpay Join Us form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update the JoinUs Component
1. Open `src/components/JoinUs.js`
2. Find the EmailJS configuration section (around line 150)
3. Replace the placeholder values:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Test the Form
1. Start your React development server: `npm start`
2. Navigate to the Join Us page
3. Fill out and submit the form
4. Check your email for the form submission

## Troubleshooting
- Make sure all three IDs are correctly entered
- Check that your email service is properly connected
- Verify the template variables match exactly (case-sensitive)
- Check the browser console for any error messages

## Security Notes
- Never commit your EmailJS keys to version control
- Consider using environment variables for production
- The free EmailJS plan has limits on monthly emails

## Alternative: Manual Email Setup
If you prefer not to use EmailJS, you can:
1. Remove the EmailJS integration from the form
2. Set up a simple contact form handler
3. Use a service like Formspree or Netlify Forms