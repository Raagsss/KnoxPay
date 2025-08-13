# EmailJS Setup Guide for KnoxPay Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}}

Hello Knoxpay Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Business Name: {{business_name}}
Postcode: {{postcode}}

Best regards,
{{from_name}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update the Contact Component
Replace the placeholder values in `src/components/Contact.js`:

```javascript
// Line 8: Replace with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// In handleSubmit function, replace:
'YOUR_SERVICE_ID'    // with your Service ID
'YOUR_TEMPLATE_ID'   // with your Template ID
'YOUR_PUBLIC_KEY'    // with your Public Key
```

## Step 6: Test the Form
1. Start your React app: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email for the test message

## Troubleshooting
- Make sure all IDs are correct and without quotes
- Check browser console for any errors
- Verify your email service is properly connected
- Ensure your template variables match the form data

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your code 