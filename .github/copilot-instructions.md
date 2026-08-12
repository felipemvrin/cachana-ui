# Cachaña UI — project instructions

## Language

- Communication and documentation in Spanish.
- Code, variables, comments, and technical naming in English.
- Commit descriptions must be in Spanish, even when using conventional commit types in English.

## Project scope

- This project is a small Angular 20 MVP for a Chilean design system and personal portfolio.
- Keep the architecture intentionally simple and extendable.
- Do not add new components or libraries unless the MVP explicitly requires them.
- Avoid premature abstractions, monorepos, or unrelated features.

## Design and product

- Maintain a warm, clear, and accessible visual identity inspired by Chile, Biobío, the Mapuche territory, forest, roads, signage, and retro design cues.
- Prioritize legibility, accessibility, and clarity before decorative motifs.
- Use design tokens and CSS custom properties as the foundation of styling.
- Keep the aesthetic professional and contemporary, never game-like or overloaded.

## Code quality

- Use Angular standalone components and strict TypeScript.
- Prefer composition over inheritance.
- Reuse design tokens and shared CSS patterns.
- Keep changes small and traceable.
- Do not invent APIs or speculative features.
- Review the existing repository before making architectural changes.

## Git and commits

- Use Conventional Commits with the format: `type(scope): description in Spanish`.
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Never create automated commits without explicit user request.
- Do not mix unrelated changes in the same commit.

## Accessibility and quality

- Use semantic HTML and proper labels.
- Ensure visible focus states and keyboard support.
- Respect reduced-motion preferences.
- Keep contrast high enough for readability.
- Avoid relying only on color to convey meaning.

## Workflow

- Work from `main` for stable code.
- Use feature/fix/docs/refactor/chore branch naming when creating task branches.
- Keep the MVP tight: tokens, typography, Button, Input, Badge, Card, Storybook, and a small home page first.
