<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Emilie Martin-Donati

Site vitrine freelance : présentation, stack, aperçus de projets. Déployé sur Vercel depuis GitHub.

## Stack
- Next.js 16.3 (preview, App Router), React 19.2, TypeScript strict
- Tailwind CSS v4 : configuration **dans le CSS** (`app/globals.css`, bloc `@theme`). Il n'y a pas de `tailwind.config.js`, ne pas en créer.
- Gestionnaire de paquets : **npm** (`package-lock.json`). Pas de pnpm ni yarn.

## Commandes
- `npm run dev` : serveur de dev
- `npm run build` : build de production (ce que Vercel exécute)
- `npm run lint` : ESLint (config Next core-web-vitals + TypeScript)
- `npx tsc --noEmit` : vérification des types
- Pas encore de tests.

Avant de considérer une tâche terminée : `npx tsc --noEmit` et `npm run lint` passent sans nouvelle erreur.

## Structure
- `app/` : routes uniquement (`page.tsx`, `layout.tsx`, `projects/`, `projects/[slug]/`). Pas de logique métier ici.
- `features/<feature>/` : sections et composants propres à une page (ex. `features/landing/HeroSection.tsx`).
- `components/` : composants UI réutilisables (`Tag`, `ActionButton`, `Header`, `Footer`).
- `data/` : contenu typé du site (`projects.ts`, `skills.ts`). Le contenu se modifie ici, jamais en dur dans les composants.
- `docs/styles/` : spécifications de design (espacements par section).

## Conventions
- Server Components par défaut. `"use client"` seulement si le composant utilise un état, un effet ou un événement navigateur.
- Imports via l'alias `@/` (`@/components/Tag`), pas de chemins relatifs `../../`.
- Un composant par fichier, export par défaut, props typées explicitement. Pas de `any`.
- Les types de données vivent à côté des données (`data/*.ts`) et sont réutilisés dans les props.

## Design system
- **Utiliser uniquement les tokens de `@theme`** (couleurs, espacements, rayons, typo `text-h1`, `text-body`…). Pas de couleur hex ni de valeur arbitraire (`[13px]`) dans les classes.
- Les classes composants partagées (`.landing-section`, `.tag`, `.coral-tag`, `.project-card`…) sont dans `@layer components` de `globals.css`. Ajouter une variante là plutôt que de dupliquer des utilitaires.
- Les espacements verticaux suivent `docs/styles/spacing.md`.
- Règles Tailwind détaillées (tokens, nommage, usage dans les composants, revue) : `.claude/skills/tailwind-design-system/SKILL.md`. Les lire avant de modifier `globals.css` ou les classes d'un composant.

## Pièges
- **Pas de classes Tailwind construites dynamiquement** (`` `bg-${variant}` ``) : Tailwind ne les détecte pas et elles ne sont pas générées. Utiliser une table de correspondance avec les classes écrites en entier (voir `variantClassMap` dans `components/Tag.tsx`).
- **L'échelle d'espacement est personnalisée** : `--spacing-5` = 24px, `--spacing-6` = 32px, etc. Les numéros ne correspondent pas à l'échelle Tailwind par défaut. Vérifier la valeur dans `@theme` avant de choisir `gap-5` ou `p-6`.
- Les polices passent par `next/font` dans `app/layout.tsx` (variables `--font-syne`, `--font-inter`).
- Next.js 16 est en preview : en cas de doute sur une API (params des routes dynamiques, metadata, images), lire `node_modules/next/dist/docs/` plutôt que de se fier à ses connaissances.
