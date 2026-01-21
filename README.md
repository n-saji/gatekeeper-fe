# GateKeeper (Frontend)

GateKeeper is a Next.js (App Router) frontend for an access management product. It currently includes a landing page and an authentication “Get Started” experience (Sign In / Sign Up) built with a small UI component library, form validation, and theme support.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **next-themes** for light/dark/system theme support
- **Radix UI** primitives (Tabs, Label, etc.)
- **react-hook-form** + **zod** for form state + validation
- **lucide-react** for icons

## Requirements

- **Node.js**: 18.18+ (or 20+ recommended)
- A package manager: **npm**, **pnpm**, or **yarn**

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run the production server (after build)
- `npm run lint` — run ESLint

## Routes

- `/` — Landing page (navbar + main hero + footer)
- `/get-started` — Authentication page with tabs:
  - **Sign In** (email + password)
  - **Sign Up** (first name, last name, email, password, confirm password)

> Note: the current Sign In/Sign Up forms log submitted data to the browser console. Hook these handlers up to your backend/API when ready.

## Project Structure (high level)

```text
app/
	(pages)/
		(auth)/
			_components/
				signIn.tsx
				signUp.tsx
			get-started/
				page.tsx
	components/
		landing/
			navbar.tsx
			main.tsx
			footer.tsx
	providers/
		themeProvide.tsx
	asset/
		icons/
	layout.tsx
	page.tsx

components/
	ui/
		(shared UI primitives)

lib/
	utils.ts
```

## Styling & UI

- Tailwind is used throughout for layout and styling.
- Shared UI components live in `components/ui`.
- Theme is managed via `app/providers/themeProvide.tsx` and applied in `app/layout.tsx`.

## Path Aliases

This project uses the `@/*` alias (configured in `tsconfig.json`), e.g.:

```ts
import { Button } from "@/components/ui/button";
```

## License

See `LICENSE`.
