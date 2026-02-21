# Raihan Muhammad Rafi - Portfolio

A modern, professional, and responsive developer portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern dark-themed UI with professional blue accent colors
- Fully responsive design (mobile & desktop)
- Smooth scroll navigation
- Reusable project card components
- SEO-optimized with meta tags
- Fast loading and optimized build
- Contact form ready for integration
- Mobile menu for smaller screens

## Sections

- **Hero Section** - Name, title, value proposition, and CTA buttons
- **About Me** - Professional summary and career goals
- **Tech Stack** - Categorized technologies with icons
- **Projects** - Showcase projects with reusable components
- **Experience** - Placeholder for work experience
- **Contact** - Social links and contact form
- **Footer** - Copyright information

## How to Add New Projects

Projects are defined in `src/App.tsx` in the `projects` array. To add a new project:

1. Open `src/App.tsx`
2. Locate the `projects` array (around line 10)
3. Add a new project object:

```typescript
{
  title: 'Your Project Name',
  description: 'Brief description of what your project does',
  techStack: ['Golang', 'PostgreSQL', 'Docker'],
  keyFeatures: [
    'Feature 1 description',
    'Feature 2 description',
    'Feature 3 description'
  ],
  githubLink: 'https://github.com/yourusername/project-name',
  liveLink: 'https://your-demo-url.com' // Optional
}
```

## Customization

### Update Personal Information

In `src/App.tsx`, update:
- Social media links (GitHub, LinkedIn, Email) on lines ~100-110 and ~265-275
- Project examples in the `projects` array
- Tech stack in the `techStack` object

### Update Contact Information

Replace placeholder links and email:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Email: `your.email@example.com`

### Color Scheme

The portfolio uses a professional blue and slate color scheme. To customize:
- Primary colors: `blue-400`, `blue-500`, `blue-600`
- Background: `slate-900`, `slate-800`
- Borders: `slate-700`, `slate-600`
- Text: `slate-300`, `slate-400`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── App.tsx                 # Main application with all sections
├── components/
│   └── ProjectCard.tsx     # Reusable project card component
├── index.css               # Tailwind CSS imports
└── main.tsx                # React entry point
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)
