# ⚡ Quick Start Guide

> **Get Intern-Hub running in under 5 minutes**

---

## 🎯 What You'll Need

Before you begin, make sure you have:

- ✅ A modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ A code editor (VS Code, Sublime, Atom, etc.) - *optional but recommended*
- ✅ Basic understanding of HTML/CSS - *optional for customization*
- ✅ Git installed - *for cloning the repository*

---

## 🚀 Installation Methods

Choose the method that works best for you:

### Method 1: Clone with Git (Recommended)

```bash
# Clone the repository
git clone https://github.com/incial/intern-hub.git

# Navigate to the directory
cd intern-hub

# Open in your browser
# Option A: Double-click index.html
# Option B: Use VS Code Live Server
# Option C: Use any local server
```

### Method 2: Download ZIP

1. Visit [https://github.com/incial/intern-hub](https://github.com/incial/intern-hub)
2. Click the green **Code** button
3. Select **Download ZIP**
4. Extract the ZIP file
5. Open `index.html` in your browser

### Method 3: Use GitHub Codespaces

```bash
# Click "Code" → "Open with Codespaces"
# Wait for environment to load
# Run with Live Server or open index.html
```

---

## 🌐 Local Development

### Using VS Code Live Server

1. **Install Live Server** extension in VS Code
2. **Right-click** on `index.html`
3. **Select** "Open with Live Server"
4. Browser opens automatically at `http://127.0.0.1:5500`

### Using Python's Built-in Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit http://localhost:8000
```

### Using Node.js http-server

```bash
# Install globally
npm install -g http-server

# Run in project directory
http-server

# Visit http://localhost:8080
```

### Using PHP Built-in Server

```bash
php -S localhost:8000

# Visit http://localhost:8000
```

---

## 📝 First Customization

### 1. Update Site Title

**File**: `index.html`

```html
<!-- Find and update -->
<title>Intern-Hub | TBI AJCE</title>

<!-- Change to -->
<title>Your Custom Title | Your Org</title>
```

### 2. Add Your First Opportunity

**File**: `index.html`

Locate the opportunities section and add:

```html
<div class="opportunity-card">
  <div class="icon">💼</div>
  <h3>Software Developer Intern</h3>
  <p class="company">Tech Company Inc.</p>
  <p class="description">
    Build amazing web applications with our development team.
  </p>
  <div class="meta">
    <span class="duration">⏱️ 3 months</span>
    <span class="location">📍 Remote</span>
  </div>
  <a href="#apply" class="btn-primary">Apply Now</a>
</div>
```

### 3. Change Color Scheme

**File**: `style.css`

```css
/* Update CSS variables */
:root {
  --primary-color: #1a73e8;    /* Change this */
  --secondary-color: #f8f9fa;  /* And this */
  --accent-color: #ff6b6b;     /* And this */
}
```

---

## 🎨 Project Structure at a Glance

```
intern-hub/
├── 📄 index.html          ← Start here (main page)
├── 🎨 style.css           ← Global styles
├── 📂 assets/
│   ├── 🎨 css/            ← Additional styles
│   ├── 🖼️ images/         ← All images
│   ├── ⚙️ js/             ← Scripts
│   └── 🔤 fonts/          ← Custom fonts
├── 📂 tracks/             ← Tracks section
└── 📂 docs/               ← Documentation
```

---

## ✅ Verify Installation

Check that everything works:

### 1. Homepage Loads
- [ ] Hero section displays correctly
- [ ] Images load properly
- [ ] Navigation works
- [ ] Smooth scrolling functions

### 2. Responsive Design
- [ ] Looks good on desktop (1920px+)
- [ ] Looks good on tablet (768px)
- [ ] Looks good on mobile (375px)

### 3. Interactive Elements
- [ ] Buttons are clickable
- [ ] Hover effects work
- [ ] Animations trigger on scroll
- [ ] Forms are functional (if any)

### 4. Browser Compatibility
- [ ] Chrome/Edge ✓
- [ ] Firefox ✓
- [ ] Safari ✓

---

## 🎓 Next Steps

Now that you're up and running:

1. **📖 Read the [Full Documentation](DOCUMENTATION.md)**
2. **🛠️ Explore [Features](FEATURES.md)**
3. **🎨 Customize the design to match your brand**
4. **📝 Add your internship opportunities**
5. **🚀 Deploy to production** (see deployment guide below)

---

## 🚀 Quick Deploy

### Deploy to Vercel (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (run in project directory)
vercel

# Follow prompts, and you're live! 🎉
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Follow prompts for production deployment
```

### Deploy to GitHub Pages

1. **Push** your code to GitHub
2. **Go to** repository Settings
3. **Navigate to** Pages section
4. **Select** branch (usually `main`)
5. **Click** Save
6. **Wait** 2-3 minutes
7. **Visit** `https://yourusername.github.io/intern-hub`

---

## 🐛 Troubleshooting

### Images Not Loading

**Problem**: Broken image icons appear  
**Solution**: Check that paths are correct:
```html
<!-- Correct -->
<img src="assets/images/hero/banner.jpg" alt="Banner">

<!-- Wrong -->
<img src="/assets/images/hero/banner.jpg" alt="Banner">
```

### Styles Not Applied

**Problem**: Page looks unstyled  
**Solution**: Verify CSS links in `<head>`:
```html
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="style.css">
```

### JavaScript Not Working

**Problem**: Animations or interactions broken  
**Solution**: Check browser console (F12) for errors. Ensure scripts load in correct order:
```html
<!-- jQuery must load before other scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/main.js"></script>
```

### Layout Broken on Mobile

**Problem**: Elements overflow or stack incorrectly  
**Solution**: Ensure viewport meta tag exists:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 💡 Pro Tips

- 🔥 Use **Live Server** extension in VS Code for hot-reload
- 📱 Test on **real devices**, not just browser DevTools
- 🎨 Use **browser DevTools** to experiment with styles
- 💾 **Commit often** if using Git
- 📸 **Optimize images** before adding (use TinyPNG or similar)
- 🔍 Use **Lighthouse** to check performance

---

## 📚 Learning Resources

- **HTML**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [CSS Tricks](https://css-tricks.com/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **Bootstrap**: [Bootstrap Docs](https://getbootstrap.com/docs/)
- **Git**: [Git Handbook](https://guides.github.com/introduction/git-handbook/)

---

## 🆘 Need Help?

- 📖 Check the [Full Documentation](DOCUMENTATION.md)
- 💬 Open an [Issue on GitHub](https://github.com/incial/intern-hub/issues)
- 🤝 Join the community discussions

---

<div align="center">

**[← Back to README](../README.md)** | **[Documentation →](DOCUMENTATION.md)** | **[Features →](FEATURES.md)**

---

✨ **Happy coding!** ✨

</div>
