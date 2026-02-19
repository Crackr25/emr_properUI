# Healthcare Login - React + Vite + Tailwind CSS

A modern React application built with Vite and styled with Tailwind CSS, featuring TypeScript support and a comprehensive UI component library.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **TanStack Table** - Powerful table component

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
react-app/
├── src/
│   ├── lib/
│   │   └── utils.ts       # Utility functions (cn helper)
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles with Tailwind directives
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Features

- ⚡️ Lightning-fast HMR with Vite
- 🎨 Tailwind CSS for rapid UI development
- 🔒 TypeScript for type safety
- 🎯 Path aliases configured (`@/` points to `src/`)
- 📦 Pre-configured with popular UI libraries
- ♿️ Accessible components with Radix UI
- 🎭 Form validation with React Hook Form + Zod

## Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize your design system:

```js
export default {
  theme: {
    extend: {
      // Add your custom colors, fonts, etc.
    },
  },
}
```

### Path Aliases

The project is configured with `@/` as an alias to the `src/` directory. You can import like this:

```typescript
import { cn } from '@/lib/utils'
```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to your hosting service.

## License

MIT
