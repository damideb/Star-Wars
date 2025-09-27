# Star Wars Dashboard

A small Next.js dashboard showcasing Star Wars data (films, people, species, starships). The app fetches data from services and renders detail pages using server components. Interactive bits (sidebar toggle, pagination on the starships list) use client components.

## Highlights

- Next.js 15 + React 19 application
- Tailwind CSS for styling
- Mostly server components for pages and data fetching (SSR/SSG)
- Client components where interaction is required (sidebar toggle, pagination)
- Reusable detail layout component for dynamic `[id]` pages


## Important files and folders

- `app/` — Next.js app routes and layouts.
  - `app/(Dashboard)/...` — dashboard routes (overview, people, species, starships) and their dynamic detail routes.
  - `app/globals.css` — global styles (Tailwind + small tweaks like preventing horizontal overflow).
- `components/`
  - `Header.tsx` — client header; provides the mobile menu button and account UI.
  - `Sidebar.tsx` — client sidebar; renders a fixed sidebar on desktop and an off-canvas panel on mobile.
  - `DetailLayout.tsx` — server component used by all dynamic `[id]` pages. Accepts `imageSrc`, `imageAlt`, `title`, and `details: Record<string, unknown>` and maps the details into labeled rows.
  - `reusables/` — small UI primitives (Input, Table, MetricCard, etc.) used across pages.
- `services/index.ts` — centralized data fetching functions used by pages, e.g. `getAllFilms`, `getSingleFilm`, `getAllPeople`, `getSinglePeople`, `getAllSpecies`, `getSingleSpecie`, `getAllStarships`, `getSingleStarship`.
- `utils/` — small helper functions (e.g. `formatFullDate` and other utilities).


## Server components vs Client components

- Server components (default): used for pages and components that only render data fetched on the server. They are used throughout the app for the dynamic detail pages and the majority of rendering logic.
- Client components (`"use client"`): used where there is user interaction or local UI state. Examples in this project:
  - `Header.tsx` and `Sidebar.tsx` — toggle sidebar on mobile
  - Starships page/pagination — implemented as a client component so it can fetch pages and keep the UI snappy without a full page reload


## Running the project

Install dependencies:

```powershell
npm install
```

Start development server:

```powershell
npm run dev
```





