---
name: tailwind-design-system
description: Use when writing, refactoring or reviewing Tailwind CSS v4 styles — the @theme stylesheet, design tokens, or className usage in React components. Covers token architecture and naming, what belongs in @theme vs :root vs layers, variant patterns, cn/tailwind-merge, and what to flag in review.
---

# Tailwind v4 design system

Apply these rules whenever you write, refactor or review Tailwind CSS v4 code: the theme stylesheet and every component that consumes it. Each rule is phrased so it can be checked. When a rule conflicts with an explicit instruction from the user, follow the user and say which rule you broke.

When the task is a review or an audit, also read `references/review-checklist.md` and report against it.

## 1. Token architecture

Tokens live in two layers. Components only ever consume the second.

1. **Primitives** hold raw values and are named by scale: `--color-coral-500`, `--color-neutral-100`. They describe *what* a value is.
2. **Semantic tokens** hold decisions and are named by role: `--color-surface`, `--color-surface-inverse`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-border`. They reference primitives (`var(--color-coral-500)`) and describe *what the value is for*.

Naming rules:

- Name semantic tokens by purpose, never by appearance. `--color-text-muted` is right; `--color-timid-grey` or `--color-light-grey` is wrong.
- Pair surfaces with their content color: `--color-surface-inverse` goes with `--color-text-on-inverse` (or `surface` / `surface-foreground`). Never rely on a muted color that only reads correctly on one background.
- Use one structure for every name: category, then role, then variant or state (`--color-accent-hover`). Keep it shallow: add a level only if it separates two real tokens.
- Avoid homonyms and vague words (`standard`, `normal`, `main`, `timid`). If two names can be confused, rename one.
- Keep a token local to one component (a CSS variable or a constant in the component) until about three components need it. Then promote it to the theme.
- Keep theme and mode separate: dark mode re-assigns semantic tokens, it never creates new names like `--color-dark-text`.

## 2. The theme stylesheet

There is one source of truth for tokens: the `@theme` block of the main CSS file. Every value a component needs comes from there.

- **`@theme` only for tokens that must generate a utility** (`--color-*`, `--text-*`, `--radius-*`, `--font-*`, `--shadow-*`, `--breakpoint-*`). Plain CSS variables that need no utility go in `:root`.
- **Use `@theme inline` when a token references another variable**, e.g. `--font-sans: var(--font-inter)` with `next/font`, or semantic colors that point to `:root`/`.dark` values.
- **Close the palette when the system is closed.** Start the color block with `--color-*: initial;` so default colors (`bg-red-500`) cannot leak into components. Do the same for any namespace you fully redefine.
- **Do not renumber the spacing scale.** Spacing utilities are computed as `n × --spacing`. Change `--spacing` itself if the base unit must differ. Never redefine numbered steps (`--spacing-6: 32px`): it silently breaks the meaning of `p-6` and `gap-6`. Named spacing tokens with a role are fine: `--spacing-section-x`.
- **Bundle typography in one token.** Define `--text-h1` with its `--line-height`, `--letter-spacing` and `--font-weight` sub-properties, so one class sets the whole style.
- **No duplicates.** Two tokens with the same value and the same role are merged. Two tokens with the same value but different roles may coexist only if both names are semantic.
- **Group and order the block**: colors (primitives, then semantic), typography, spacing, radius, borders, shadows, motion. One short comment per group at most; no comment that repeats the token name.
- **Custom CSS goes in the right layer, and rarely.** `@layer base` for element defaults (`body`, headings). `@utility` for a single-purpose utility that must work with variants. `@layer components` only for multi-property patterns that cannot be a React component (third-party markup, rendered Markdown). Anything you put there must use theme variables, never raw values.
- **Avoid `@apply`** outside `@layer base` and third-party overrides. It recreates the long, duplicated stylesheet that utility-first is meant to remove.

## 3. Using tokens in components

Reuse happens in React components, not in CSS. A component's class list is the only place its styles are written.

- **Extract on repetition, not in advance.** Markup rendered in a loop is already written once. Duplication inside one file is acceptable. Create a component when the same pattern appears in several files.
- **Never build class names dynamically.** `` `bg-${variant}` `` or `` `text-${color}-500` `` is invisible to Tailwind's scanner and generates nothing. Map each variant to a complete, literal class string:

```tsx
const variants = {
  accent: "bg-accent text-on-accent hover:bg-accent-hover",
  inverse: "bg-surface-inverse text-on-inverse",
} as const;

type Variant = keyof typeof variants;
```

- **Use CVA (or tailwind-variants) once a component has two or more variant dimensions or compound variants.** Define the config outside the component body. Type the props from it.
- **Accept `className` and merge it last** with a `cn()` helper (`clsx` + `tailwind-merge`): base classes, then variants, then conditionals, then `className`. The caller can override; the component never has to.
- **Only semantic tokens in class lists.** No primitives (`bg-coral-500`) in components, no hex or `rgb()` in `className` or `style`, no default palette classes.
- **No arbitrary values for a recurring value.** `p-[13px]` or `text-[#5a5a5a]` is acceptable once, with a reason. A value used in two or more places becomes a token.
- **Keep class lists short by moving decisions into tokens**, not into custom classes. A long list usually means a missing semantic token (several color utilities that always go together) or a missing component.
- **Shared fragments become constants**, e.g. a `focusRing` string reused across interactive components.
- **Sort classes automatically** with `prettier-plugin-tailwindcss`. Do not hand-order them.

After any change to the theme, search the codebase for every utility derived from the tokens you changed or removed, and update the components that use them.
