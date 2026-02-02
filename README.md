# Urban Minimal - Streetwear Website

A minimalist streetwear clothing website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Clean, minimalist design aesthetic
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🛍️ Product showcase with quick view modals
- 📧 Contact form for order inquiries
- 🚀 Fast loading and lightweight

## Files Included

- `index.html` - Main HTML file
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality
- `README.md` - This file

## How to Deploy to GitHub Pages (FREE)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account if you don't have one

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it: `your-username.github.io` (replace "your-username" with your actual GitHub username)
   - Example: if your username is "johndoe", name it `johndoe.github.io`
4. Make it **Public**
5. Click "Create repository"

### Step 3: Upload Your Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository "Settings" (gear icon)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### Step 5: Access Your Website
- Your site will be live at: `https://your-username.github.io`
- It may take 2-5 minutes for the first deployment
- Refresh after a few minutes if it doesn't load immediately

## Customization Guide

### Change Brand Name
In `index.html`, find and replace "URBAN MINIMAL" with your brand name.

### Update Products
In `index.html` and `script.js`, modify the product information:
- Product names
- Prices
- Categories

### Add Real Images
Replace the placeholder divs with actual images:
```html
<!-- Replace this: -->
<div class="image-placeholder">
    <span>PRODUCT NAME</span>
</div>

<!-- With this: -->
<img src="path-to-your-image.jpg" alt="Product Name">
```

### Change Colors
In `styles.css`, modify the CSS variables at the top:
```css
:root {
    --primary: #000000;    /* Change to your brand color */
    --secondary: #ffffff;
    --accent: #2d2d2d;
}
```

### Connect Contact Form
The form currently shows an alert. To receive actual emails:
1. Sign up for a free service like [Formspree](https://formspree.io)
2. Get your form endpoint
3. Add it to the form action in `index.html`

### Add Payment Integration (Later)
When ready to accept payments:
- [Stripe](https://stripe.com) - Payment processing
- [PayPal](https://paypal.com) - PayPal buttons
- [Snipcart](https://snipcart.com) - Shopping cart solution

## Browser Support

✅ Chrome, Firefox, Safari, Edge (latest versions)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- HTML/CSS Help: https://developer.mozilla.org
- Free Images: https://unsplash.com or https://pexels.com

## License

Free to use and modify for your business.

---

**Good luck with your streetwear brand! 🚀**
