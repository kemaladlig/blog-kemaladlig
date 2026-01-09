# Copilot Instructions for Kemal Adlığ Portfolio

## Architecture Overview

This is a **Next.js 14 App Router** portfolio and blog site for Kemal Adlığ, a Mobile & DevOps Engineer. The app uses:
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with custom theme (accent color: `#007AFF` electric blue)
- **next-themes** for dark mode support
- **Framer Motion** for animations
- **Lucide React** for icons

## Project Structure

- `src/app/`: App Router pages with nested layouts (uses `layout.tsx` pattern)
- `src/components/ui/`: Reusable UI components (navbar, blog cards)
- `src/components/home/`: Page-specific components (bento-grid landing)
- `src/lib/`: Core utilities (`blog.ts` for hardcoded blog data, `utils.ts` for Tailwind merge helper)

## Key Conventions & Patterns

### 1. Client Components Pattern
All interactive components use `"use client"` directive at the top. Examples:
- Theme switcher in `src/components/ui/navbar.tsx`
- Animated bento grid in `src/components/home/bento-grid.tsx`
- Theme provider wrapper in `src/components/theme-provider.tsx`

**When to use:** Any component using hooks (`useState`, `useTheme`, `useEffect`) or event handlers must be a client component.

### 2. Import Aliases
Use `@/*` for all internal imports (configured in `tsconfig.json`):
```typescript
import { cn } from "@/lib/utils"
import BlogCard from "@/components/ui/blog-card"
```

### 3. Styling Conventions
- **Tailwind utility-first:** All styling via Tailwind classes
- **Dark mode:** Use `dark:` prefix (e.g., `dark:bg-zinc-900`, `dark:text-gray-400`)
- **cn() utility:** Merge conditional classes with `cn()` from `src/lib/utils.ts`
- **Custom classes:** `.glass` for glassmorphism effect (navbar backdrop)
- **Color system:** Use `accent` for brand color, `foreground`/`background` for theme-aware colors

### 4. Blog System (Hardcoded)
**Important:** Blog posts are currently **hardcoded** in `src/lib/blog.ts`, not file-based. The `Post` type includes `slug`, `title`, `date`, `excerpt`, `content`, and `tags`.

To add a blog post:
1. Add a new object to the `posts` array in `src/lib/blog.ts`
2. Content is stored as a plain string (simple markdown parsing in `src/app/blog/[slug]/page.tsx`)
3. Slugs must be URL-safe (used in dynamic routes)

### 5. Animation Patterns
- Use `motion` from Framer Motion for hover effects: `whileHover={{ scale: 1.02 }}`
- Apply `animate-in fade-in duration-700` Tailwind classes for page transitions
- Mobile menu uses `AnimatePresence` for smooth open/close (see `src/components/ui/navbar.tsx`)

### 6. Theme Implementation
The theme system uses `next-themes`:
- Configured in `src/app/layout.tsx` with `suppressHydrationWarning` on `<html>`
- Toggle button checks `mounted` state to prevent hydration mismatch
- CSS variables defined in `src/app/globals.css` (`:root` and `.dark`)

### 7. Metadata Pattern
Use Next.js `metadata` export for SEO:
```typescript
export const metadata: Metadata = {
  title: "Page Title | Kemal Adlığ",
  description: "Description here"
}
```

## Development Workflow

**Run dev server:**
```bash
npm run dev  # Starts on http://localhost:3000
```

**Build & lint:**
```bash
npm run build  # Production build
npm run lint   # ESLint check
```

## Common Tasks

### Adding a New Page
1. Create `src/app/newpage/page.tsx`
2. Add navigation link to `navLinks` array in `src/components/ui/navbar.tsx`
3. Use consistent animation classes: `animate-in fade-in duration-700`

### Creating UI Components
- Place shared components in `src/components/ui/`
- Use TypeScript interfaces for props
- Follow naming: PascalCase for components, kebab-case for files
- Export as default unless creating a utility module

### Styling Guidelines
- **Responsive:** Use `md:` and `lg:` breakpoints consistently
- **Spacing:** Follow established patterns (e.g., `pt-24` for main content offset, `max-w-7xl mx-auto` for containers)
- **Typography:** Use `tracking-tight` for headings, `text-balance` for multi-line titles
- **Hover states:** Always include `transition-colors` or `transition-opacity` for smooth interactions

## Known Limitations

- Blog content is hardcoded in memory (no MDX/filesystem integration yet)
- Simple markdown parser in blog post view (only handles `#`, `##`, `###`, `-` list items)
- No pagination on blog listing page
- Location map uses static Mapbox placeholder URL

## External Links & Social
GitHub, LinkedIn, and email links are hardcoded in `src/components/home/bento-grid.tsx`. Update these when changing contact information.
