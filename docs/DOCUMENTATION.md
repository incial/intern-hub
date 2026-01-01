# 📖 Documentation

> **Complete guide to Intern-Hub platform**

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Pages & Navigation](#pages--navigation)
- [Styling Architecture](#styling-architecture)
- [Assets & Resources](#assets--resources)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [FAQ](#faq)

---

## Overview

**Intern-Hub** is a lightweight, static web platform designed to centralize internship and opportunity listings for students at **TBI AJCE**. Built with a focus on simplicity and performance, it requires no backend infrastructure and can be hosted on any static hosting service.

### Key Characteristics

- 🎯 **Purpose-built** for student internship discovery
- ⚡ **Static-first** architecture for instant loading
- 📱 **Fully responsive** across all devices
- 🎨 **Clean UI/UX** with modern design patterns
- 🔧 **Easy to maintain** and extend

---

## Project Structure

```
Intern-Hub/
├── index.html              # Main landing page
├── 404.html                # Custom error page
├── README.md               # Project documentation
├── style.css               # Main stylesheet
├── assets/
│   ├── css/                # Stylesheets
│   │   ├── bootstrap.min.css
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   └── ...
│   ├── js/                 # JavaScript files
│   │   ├── jquery.min.js
│   │   ├── bootstrap.min.js
│   │   ├── main.js
│   │   └── ...
│   ├── images/             # Image assets
│   │   ├── hero/
│   │   ├── about/
│   │   ├── testimonial/
│   │   └── ...
│   ├── fonts/              # Web fonts & icon fonts
│   └── webfonts/           # Additional font files
├── tracks/                 # Specialized tracks section
│   ├── index.html
│   ├── script.js
│   └── style.css
└── docs/                   # Documentation files
```

---

## Pages & Navigation

### Main Pages

#### 1. **Homepage** (`index.html`)
The primary landing page featuring:
- Hero section with call-to-action
- Featured opportunities
- About section
- Testimonials
- Contact information

#### 2. **Tracks Page** (`tracks/index.html`)
Specialized section showcasing different internship tracks and career pathways.

#### 3. **404 Page** (`404.html`)
Custom error page for handling broken links gracefully.

### Navigation Structure

The site uses a simple navigation pattern:
- Fixed header with logo and menu
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Footer with additional links

---

## Styling Architecture

### CSS Organization

The project uses a modular CSS architecture:

| File | Purpose |
|------|---------|
| `style.css` | Global base styles |
| `bootstrap.min.css` | Grid system & utilities |
| `animations.css` | Animation definitions |
| `responsive.css` | Media queries & breakpoints |
| `custom-spacing.css` | Spacing utilities |
| `menus.css` | Navigation styles |

### Color Scheme

```css
/* Primary Colors */
--primary: #1a73e8;
--secondary: #f8f9fa;
--accent: #ff6b6b;

/* Text Colors */
--text-dark: #2c3e50;
--text-light: #6c757d;

/* Background Colors */
--bg-light: #ffffff;
--bg-dark: #f8f9fa;
```

### Typography

- **Headings**: System fonts with fallback to sans-serif
- **Body**: 16px base size, 1.6 line-height
- **Code**: Monospace fonts for technical content

---

## Assets & Resources

### Images

Images are organized by category in `assets/images/`:
- **hero/** - Landing page hero images
- **about/** - About section visuals
- **testimonial/** - User testimonials & avatars
- **campus/** - Campus & venue photos
- **topics/** - Topic/category icons

### Icon Fonts

Using Elegant Icons for UI elements:
```html
<link rel="stylesheet" href="assets/fonts/elegant-icon.css">
```

### JavaScript Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| jQuery | 3.x | DOM manipulation |
| Bootstrap | 5.x | UI components |
| Owl Carousel | 2.x | Carousels/sliders |
| WOW.js | Latest | Scroll animations |
| Isotope | Latest | Filtering & layout |
| Magnific Popup | Latest | Lightbox/modals |

---

## Customization Guide

### Adding New Opportunities

1. **Edit** `index.html`
2. **Locate** the opportunities section
3. **Duplicate** an existing card:
```html
<div class="opportunity-card">
  <h3>Opportunity Title</h3>
  <p>Description...</p>
  <a href="#" class="btn">Apply Now</a>
</div>
```
4. **Update** content and links
5. **Save** and refresh

### Changing Colors

Update CSS variables in `style.css`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
}
```

### Adding New Sections

1. Create HTML section in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation menu if needed
4. Test responsiveness

### Modifying Navigation

Edit the header section in `index.html`:
```html
<nav class="navbar">
  <ul class="nav-menu">
    <li><a href="#section">Menu Item</a></li>
  </ul>
</nav>
```

---

## Deployment

### Static Hosting Options

#### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

#### 3. **GitHub Pages**
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Save

#### 4. **Traditional Hosting**
- Upload all files via FTP
- Ensure `index.html` is in root directory
- Configure `.htaccess` if needed

### Pre-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Optimize images for web
- [ ] Validate HTML/CSS
- [ ] Test on multiple browsers
- [ ] Check mobile responsiveness
- [ ] Review loading performance
- [ ] Update meta tags and SEO
- [ ] Configure custom domain (if applicable)

---

## FAQ

### General Questions

**Q: Is this a dynamic website with a database?**  
A: No, Intern-Hub is a static website. All content is hardcoded in HTML. Future versions may integrate with APIs.

**Q: Can I add a backend?**  
A: Yes! The frontend is designed to be easily extended with backend APIs. Consider using Node.js, Python Flask/Django, or serverless functions.

**Q: How do I update opportunities?**  
A: Currently, you need to edit the HTML files directly. For frequent updates, consider implementing a CMS or admin panel.

### Technical Questions

**Q: Which browsers are supported?**  
A: All modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not officially supported.

**Q: Is jQuery necessary?**  
A: Some plugins depend on jQuery, but you could refactor to vanilla JavaScript if preferred.

**Q: Can I use a different CSS framework?**  
A: Yes, but you'll need to update the HTML structure and remove Bootstrap dependencies.

**Q: How do I minify the code for production?**  
A: Use tools like:
- HTML: `html-minifier`
- CSS: `cssnano`
- JS: `terser` or `uglify-js`

### Contribution Questions

**Q: How can I contribute?**  
A: See the [CONTRIBUTING.md](../CONTRIBUTING.md) guide (if available) or fork the repository and submit a pull request.

**Q: Who maintains this project?**  
A: This is maintained by the TBI AJCE community.

---

## Need Help?

- 📧 **Email**: support@tbiajce.edu (example)
- 💬 **Issues**: [GitHub Issues](https://github.com/incial/intern-hub/issues)
- 📚 **More Docs**: Check other files in `/docs`

---

<div align="center">

**[← Back to README](../README.md)** | **[Quick Start →](QUICKSTART.md)** | **[Features →](FEATURES.md)**

</div>
