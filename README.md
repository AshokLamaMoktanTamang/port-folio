# Ashok Lama - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Ashok Lama, a full-stack software engineer with 3+ years of experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Project Showcase**: Highlights flagship projects including AISA (AI Subject Assistant)
- **Experience Timeline**: Interactive timeline of professional experience
- **Skills Section**: Comprehensive categorization of technical skills
- **Contact Form**: Professional contact form for inquiries
- **Fast Performance**: Optimized build with Vite for lightning-fast loading

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static site ready for any hosting platform

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory, ready for deployment.

## Deployment

This portfolio can be deployed to any static hosting service:

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Vite settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Other Hosting Services

The `dist` folder after building contains all static files needed. Simply upload to:
- AWS S3 + CloudFront
- Firebase Hosting
- Azure Static Web Apps
- Any static file hosting service

## Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.tsx     # Navigation bar
│   ├── Hero.tsx       # Hero/landing section
│   ├── About.tsx      # About section with skills
│   ├── Projects.tsx   # Projects showcase
│   ├── Experience.tsx # Work experience timeline
│   ├── Contact.tsx    # Contact form and info
│   └── Footer.tsx     # Footer component
├── data/
│   └── portfolio.ts   # Portfolio data (projects, experience, skills)
├── types/
│   └── index.ts       # TypeScript type definitions
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles and animations
```

## Customization

To customize this portfolio for another person:

1. Update personal information in `src/data/portfolio.ts`
2. Replace project data, experiences, and skills
3. Update meta tags in `index.html`
4. Modify color scheme in Tailwind classes (currently using teal/emerald theme)

## Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: ~182KB (gzipped: ~55KB)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or feedback about this portfolio:

- Email: moktashok@gmail.com
- LinkedIn: [linkedin.com/in/ashok-lama](https://linkedin.com/in/ashok-lama)
- GitHub: [github.com/ashok-lama](https://github.com/ashok-lama)

## License

This project is open source and available for personal and commercial use.
