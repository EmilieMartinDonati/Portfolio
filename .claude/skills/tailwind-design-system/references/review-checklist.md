# Tailwind review checklist

When reviewing Tailwind code, report every match below with its file and line, and propose the fix.

| Smell | How to detect it | Fix |
| --- | --- | --- |
| Dynamic class name | Template literal or concatenation inside `className` that builds a utility name | Literal variant map or CVA |
| Appearance-based token name | Token named after a color, shade or adjective (`grey`, `light`, `timid`, `standard`) instead of a role | Rename to a semantic token |
| Renumbered spacing step | `--spacing-<number>` defined in `@theme` | Remove; adjust `--spacing` or use a named token |
| Duplicate token | Two tokens with the same value and the same role | Merge into one |
| Hard-coded value | Hex, `rgb()`, `px` or arbitrary value in a component for something the theme covers | Use the token, or create one |
| Primitive in a component | `bg-<hue>-<step>` or `var(--color-<hue>-<step>)` outside the theme | Use the semantic token |
| Missing variant styles | A variant declared in a type or map with no matching styles | Add the styles or remove the variant |
| Premature component class | A class in `@layer components` used once, or that a React component could own | Inline the utilities in the component |
| `@apply` outside base | `@apply` in `@layer components` or `@utility` for first-party markup | Move the utilities into the component |
| Unmerged `className` | Component accepts `className` but concatenates it without `cn()` | Merge last with `cn()` |
| Theme bypass | `var(--x)` defined in `:root` used where a `@theme` utility should exist, or vice versa | Move the token to the right block |
