# GitHub Copilot Instructions for UPYA React Application

## Project Overview
UPYA is a modern, professional React application built with:
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS with CSS variables for theming

## Project Structure
```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation and header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Features showcase grid
│   ├── FeatureCard.tsx # Individual feature card
│   └── Footer.tsx      # Footer with links
├── pages/              # Page-level components (future expansion)
├── styles/             # CSS modules and global styles
│   ├── index.css       # Global styles and CSS variables
│   ├── App.css         # App-level styles
│   ├── Header.css      # Header component styles
│   ├── Hero.css        # Hero section styles
│   ├── Features.css    # Features section styles
│   ├── FeatureCard.css # Feature card styles
│   └── Footer.css      # Footer styles
├── utils/              # Utility functions and helpers
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Key Features
1. **Responsive Design**: Mobile-first approach with breakpoints at 768px
2. **Modern Styling**: CSS variables for consistent theming and easy customization
3. **Component-Based**: Modular, reusable components
4. **Type-Safe**: Full TypeScript support
5. **Fast Development**: Vite for instant HMR (Hot Module Replacement)

## Development Commands
- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Color Scheme (CSS Variables)
- Primary: `#6c5ce7` (Purple)
- Secondary: `#00b894` (Green)
- Dark Background: `#0f0e17`
- Light Background: `#ffffff`
- Text Dark: `#1a1a2e`
- Text Light: `#f5f5f5`

## Styling Guidelines
- Use CSS variables defined in `src/styles/index.css`
- Follow BEM naming convention for CSS classes
- Maintain consistent spacing using `--spacing-*` variables
- Use `--transition` for smooth animations
- Mobile-first responsive design approach

## Component Guidelines
- Keep components focused and single-responsibility
- Use functional components with hooks
- Export components as default
- Add TypeScript interfaces for props
- Maintain consistent file naming (PascalCase)

## Future Enhancements
- Add routing with react-router-dom
- Implement state management (Context API or Zustand)
- Add form validation and submission
- Integrate with backend APIs
- Add dark mode toggle
- Implement authentication
