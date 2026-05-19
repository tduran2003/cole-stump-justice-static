# Justice for Cole Stump - Static Website

A pure static HTML/CSS/JavaScript website for the Justice for Cole Stump advocacy portal. No backend, no database, no server-side code required. Deploy anywhere - GitHub Pages, Netlify, Vercel, or any static hosting.

## Features

- ✅ **Pure Static HTML/CSS/JS** - No frameworks, no build process
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Evidence Vault** - 15+ documents with search and filter
- ✅ **Interactive Timeline** - Key events in the case
- ✅ **Digital Vigil** - Community message form (static version)
- ✅ **Photo Gallery** - Lightbox viewer for memorial photos
- ✅ **MMIP Resources** - Information and advocacy links
- ✅ **Navigation** - Sticky header with mobile menu
- ✅ **Dark/Light Design** - Professional advocacy aesthetic

## File Structure

```
cole-stump-justice-static/
├── index.html                 # Home page
├── evidence-vault.html        # Evidence documents
├── timeline.html              # Case timeline
├── vigil.html                 # Digital vigil
├── gallery.html               # Photo gallery
├── mmip-resources.html        # MMIP information
├── css/
│   └── style.css             # All styles (responsive)
├── js/
│   └── main.js               # Navigation, gallery, forms
├── documents/                 # PDF files (add here)
├── photos/                    # Photo files (add here)
└── README.md                  # This file
```

## Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Static Cole Stump justice site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cole-stump-justice-static.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose: Branch `main`, Folder `/ (root)`
   - Click Save

3. **Configure custom domain (optional):**
   - In Settings → Pages → Custom domain
   - Enter your domain (e.g., `justice4colestump.com`)
   - Update DNS CNAME record to point to GitHub Pages

4. **Site is live!** Access at:
   - `https://YOUR_USERNAME.github.io/cole-stump-justice-static`
   - Or your custom domain

### Option 2: Deploy to Netlify

1. Connect your GitHub repository
2. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
3. Deploy

### Option 3: Deploy to Vercel

1. Import your GitHub repository
2. Framework: `Other` (static)
3. Deploy

### Option 4: Local Testing

Simply open `index.html` in your browser. No server needed!

## Adding Content

### Add PDF Documents

1. Place PDF files in the `documents/` folder
2. Update `evidence-vault.html` with new document entries
3. Add links to the PDF files

Example:
```html
<div class="evidence-item">
  <div class="evidence-info">
    <h4>Document Title</h4>
    <p>Document description...</p>
    <span class="evidence-category">Category</span>
  </div>
  <div class="evidence-actions">
    <a href="documents/your-file.pdf" target="_blank" class="btn btn-primary btn-small">Download</a>
    <a href="documents/your-file.pdf" class="btn btn-secondary btn-small">View</a>
  </div>
</div>
```

### Add Photos to Gallery

1. Place image files in the `photos/` folder
2. Update `gallery.html` with new image entries

Example:
```html
<div class="gallery-item">
  <img src="photos/your-photo.jpg" alt="Photo description">
  <div class="gallery-overlay">
    <div class="gallery-overlay-text">
      <p>Photo description</p>
    </div>
  </div>
</div>
```

### Update Timeline

Edit `timeline.html` to add new timeline events:

```html
<div class="timeline-item">
  <div class="timeline-content">
    <div class="timeline-date">DATE</div>
    <div class="timeline-title">EVENT TITLE</div>
    <p>Event description...</p>
  </div>
</div>
```

## Customization

### Change Colors

Edit `css/style.css` - CSS variables at the top:

```css
:root {
  --color-red: #dc2626;
  --color-black: #000000;
  --color-white: #ffffff;
  /* etc */
}
```

### Change Fonts

Edit the `<link>` tags in HTML files or in `css/style.css`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

### Change Text

Simply edit the HTML files directly. All text is in plain HTML.

## Mobile Responsiveness

The site is fully responsive:
- Desktop: Full navigation bar
- Tablet: Adjusted layout
- Mobile: Hamburger menu, stacked layout

Test on different devices or use browser DevTools.

## Search & Filter

The Evidence Vault includes:
- **Search box** - Search document titles and descriptions
- **Category filter** - Filter by document type
- Fully client-side (no server needed)

## Photo Gallery Lightbox

- Click any photo to open lightbox
- Navigate with arrow buttons or keyboard (← →)
- Close with X button or Escape key
- Works on all devices

## Static Form

The vigil form is static (messages don't save). To make it functional:

1. **Option A: Use Formspree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option B: Use Netlify Forms**
   ```html
   <form name="vigil" method="POST" netlify>
   ```

3. **Option C: Use Web3Forms**
   - Free service for static sites
   - Add your access key to the form

## SEO & Meta Tags

All pages include:
- Meta descriptions
- Open Graph tags (for social sharing)
- Responsive viewport settings

Customize in each HTML file's `<head>` section.

## Performance

- **No build process** - Instant updates
- **Minimal CSS** - Single stylesheet (15 KB)
- **Minimal JS** - Single script (8 KB)
- **Fast loading** - All assets inline or optimized
- **No external dependencies** - Works offline

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support (no CSS Grid)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Color contrast compliance
- Mobile-friendly

## Deployment Checklist

Before deploying:
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile menu works
- [ ] Gallery lightbox works
- [ ] Search/filter works
- [ ] Forms work (or disabled gracefully)
- [ ] Custom domain configured (if needed)
- [ ] SEO meta tags updated
- [ ] Social media preview looks good

## Troubleshooting

### Links not working?
- Check file paths are relative (e.g., `documents/file.pdf`)
- Ensure all files are in the correct folders

### Images not showing?
- Check image paths in HTML
- Ensure image files are in `photos/` or `assets/` folder
- Use relative paths, not absolute

### Mobile menu not working?
- Check JavaScript is enabled
- Verify `js/main.js` is loaded
- Check browser console for errors

### Gallery not working?
- Ensure images are in correct format (JPG, PNG, WebP)
- Check image paths in HTML
- Verify JavaScript is enabled

## Support & Contributions

To report issues or contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or to contribute to the Justice for Cole Stump advocacy:
- 📧 Email: justice4colestump@example.com
- 🌐 Website: https://justice4colestump.com
- 📱 Social Media: @Justice4ColeSt

---

**Remember:** This is a community-driven advocacy portal. Every contribution helps bring justice for Cole Stump and all Missing and Murdered Indigenous Persons (MMIP).
