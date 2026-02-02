# How to Connect Your Contact Form to Formspree

Follow these simple steps to start receiving emails from your contact form:

## Step 1: Sign Up for Formspree (FREE)

1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Get Started"** or **"Sign Up"**
3. Create a free account with your email
4. Verify your email address

## Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give your form a name (e.g., "Urban Minimal Contact Form")
3. Enter the email address where you want to receive messages
4. Click **"Create Form"**

## Step 3: Get Your Form Endpoint

1. After creating the form, you'll see your **Form Endpoint**
2. It looks like: `https://formspree.io/f/xyzabc123`
3. **Copy this URL** - you'll need it in the next step

## Step 4: Update Your Website

1. Open your `index.html` file
2. Find this line (around line 130):
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. **Replace** `YOUR_FORM_ID` with your actual form ID
   
   **Example:**
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

4. Save the file
5. Re-upload to GitHub (replace the old index.html)

## Step 5: Test Your Form

1. Visit your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox!

## What the Free Plan Includes

✅ **50 submissions per month** (more than enough to start!)
✅ Email notifications
✅ Spam filtering
✅ File uploads (if needed later)

## Upgrade Options (if needed later)

- **Gold Plan ($10/month)**: 1,000 submissions
- **Platinum Plan ($40/month)**: 10,000 submissions
- You can upgrade anytime as your business grows

## Troubleshooting

**Form not sending?**
- Double-check that you replaced `YOUR_FORM_ID` with your actual ID
- Make sure you uploaded the updated file to GitHub
- Check your spam folder for form submissions

**Need more submissions?**
- Use multiple free accounts with different emails
- Or upgrade to a paid plan when you're ready

**Want to customize emails?**
- In Formspree dashboard, go to Form Settings
- Customize email subject, auto-reply messages, and more

## Alternative Free Services (if needed)

If Formspree doesn't work for you, here are alternatives:

1. **Basin** - [https://usebasin.com](https://usebasin.com) - Free tier available
2. **Getform** - [https://getform.io](https://getform.io) - 50 submissions/month free
3. **EmailJS** - [https://emailjs.com](https://emailjs.com) - 200 requests/month free

---

**You're all set!** Your contact form will now send emails directly to your inbox. 📧
