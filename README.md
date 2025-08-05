# Niko Santiago Portfolio - Vite React Version

This is the migrated version of Niko Santiago's portfolio from Next.js to Vite React with TanStack Router, Tailwind CSS v4, and shadcn/ui.

## Features

- **Modern Tech Stack**: Vite + React + TypeScript
- **Routing**: TanStack Router for type-safe routing
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui components
- **Responsive Design**: Mobile-first responsive layout
- **Performance**: Optimized with Vite's fast build system

## Sections

1. **Hero Section**: Introduction with profile image and career objective
2. **Skills Section**: Technical skills and tools expertise
3. **Video Section**: WordPress demonstration video
4. **Experience Section**: Professional work experience with detailed pages
5. **Achievements Section**: Certificates and accomplishments
6. **References Section**: Character references and contact information
7. **Contact Page**: Social media links and contact details

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Clone the repository
2. Navigate to the project directory:

   ```bash
   cd new-niko-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills section
│   ├── Video.tsx       # Video player
│   ├── Experience.tsx  # Experience section
│   ├── Achievement.tsx # Achievements section
│   ├── Ref.tsx         # References section
│   ├── Navbar.tsx      # Navigation bar
│   └── Footer.tsx      # Footer component
├── routes/             # TanStack Router routes
│   ├── index.tsx       # Home page
│   ├── contact.tsx     # Contact page
│   ├── experience.$id.tsx # Experience detail page
│   └── __root.tsx      # Root layout
├── data/               # Data files
│   └── Experiences.ts  # Experience data
├── lib/                # Utility libraries
│   ├── theme.ts        # Theme configuration
│   └── constants.ts    # Constants
└── assets/             # Static assets
    └── images/         # Image files
```

## Technologies Used

- **Vite**: Fast build tool and development server
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **TanStack Router**: Type-safe routing
- **Tailwind CSS v4**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components

## Customization

### Colors

The application uses a custom color palette defined in `src/lib/theme.ts`:

- Primary: `#FFCB45` (Yellow)
- Secondary: `#EDD69A` (Light Yellow)
- Tertiary: `#FF7754` (Orange)

### Styling

- Custom CSS is in `src/styles.css`
- Tailwind utilities are used throughout components
- Responsive design with mobile-first approach

## Build for Production

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist/` directory.

## Migration Notes

This project was migrated from a Next.js application to Vite React. Key changes:

1. **Routing**: Next.js App Router → TanStack Router
2. **Styling**: SCSS → Tailwind CSS v4
3. **Build System**: Next.js → Vite
4. **TypeScript**: Enhanced type safety throughout
5. **Component Structure**: Modernized with better separation of concerns

## License

This project is for Niko Santiago's personal portfolio. UI design and programming by Geldev.
