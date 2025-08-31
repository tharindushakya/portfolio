# Cybersecurity Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, specifically designed for cybersecurity professionals, bug hunters, and security analysts.

## ✨ Features

- **Modern Design**: Clean, professional design with cybersecurity-themed aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Security Focused**: Dark theme with cyber-inspired color scheme (green/blue accents)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated contact form with validation
- **Customizable**: Easy to personalize with your own information

## 📋 Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Name, title, tagline, and social links
3. **Skills**: Visual showcase of cybersecurity expertise with progress bars
4. **Projects**: Showcase of security projects and case studies
5. **Certifications**: Display of security certifications and credentials
6. **Contact**: Contact form and information
7. **Footer**: Additional links and information

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.tsx`):
- Update your name in the h1 tag
- Change the title/subtitle
- Update social media links in the `socialLinks` array

**Contact Section** (`src/components/Contact.tsx`):
- Update contact information in the `contactInfo` array
- Update social links in the `socialLinks` array

### 2. Skills

**Skills Section** (`src/components/Skills.tsx`):
- Modify the `skills` array to reflect your expertise
- Adjust proficiency levels (0-100)
- Add/remove skills as needed

### 3. Projects

**Projects Section** (`src/components/Projects.tsx`):
- Update the `projects` array with your actual projects
- Add GitHub links, live demo links, or writeup links
- Customize project descriptions and impact statements

### 4. Certifications

**Certifications Section** (`src/components/Certifications.tsx`):
- Modify the `certifications` array with your actual certifications
- Update status: 'earned', 'in-progress', or 'planned'
- Add credential IDs and verification links

## 🎨 Styling

**Colors** (`src/index.css`):
```css
:root {
  --cyber-green: #00ff41;    /* Main accent color */
  --cyber-blue: #00d4ff;     /* Secondary accent color */
  --primary-50: #0f172a;     /* Background color */
}
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero/landing section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Certifications.tsx # Certifications display
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── index.ts          # Component exports
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css           # Global styles
```

## 💻 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hook Form** - Form handling

## 🚀 Deployment

### Netlify
1. Build: `npm run build`
2. Deploy the `dist` folder

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration

### GitHub Pages
```bash
npm install -D gh-pages
npm run deploy
```

## 🔒 Security Features

- No sensitive information in client-side code
- Proper form validation
- Secure external links
- Content Security Policy ready

## 📄 License

MIT License - feel free to use this template!

---

**Built with ❤️ for the cybersecurity community**
