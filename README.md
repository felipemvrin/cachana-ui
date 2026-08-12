# Cachaña UI

Cachaña UI es un Design System chileno, contemporáneo y cálido, pensado para conectar identidad regional, legibilidad y una estética retro muy sutil. El proyecto combina tokens, componentes reutilizables, documentación visual y una base para un portafolio personal con narrativa local.

## Concepto

La idea central es construir un sistema de diseño que use la estética del sur de Chile como lenguaje: bosque, rutas, señalética, micro, madera, terruño y memoria tecnológica. La intención no es imitar videojuegos, sino crear una experiencia moderna con alma chilena y personalidad retro.

## Features

- Design tokens claros y reutilizables
- Angular 20 con componentes standalone
- CSS custom properties y SCSS
- Tipografía con arquitectura modular
- Componentes base: Button, Input, Badge y Card
- Storybook para documentación visual
- Home del portafolio con narrativa visual
- Accesibilidad mediante foco visible y lectura clara

## Stack

- Angular 20
- TypeScript
- SCSS
- Storybook
- Vitest
- Playwright
- ESLint
- Prettier
- Stylelint
- Husky
- lucide-angular

## Design Tokens

El sistema usa variables CSS con una base mínima de tokens de color, spacing, radius, tipografía, shadow y motion. El modelo está preparado para crecer sin perder claridad.

## Components

- Button
- Input
- Badge
- Card

## Storybook

```bash
npm run storybook
```

La documentación visual se sirve en localhost:6006.

## Portfolio

La aplicación incluye una primera home con navegación básica, narrativa del sur de Chile y un sistema visual que se usa también como portafolio personal.

## Accessibility

- Semantics and labels
- Visible focus
- Keyboard-ready buttons and inputs
- Reduced motion support
- Sufficient contrast

## Desarrollo local

Se recomienda usar la línea 22 de Node. Para este proyecto, la referencia estable es Node 22.12.0.

```bash
nvm install 22.12.0
nvm use 22.12.0
npm install
npm run start
```

### Versiones clave

- Node: 22.12.0
- Angular: 20.x
- Storybook: 9.1.20
- Addons Storybook: 9.1.20

> No mezclar Storybook 9 con addons de la rama 8.x. La configuración actual queda fijada para evitar ese drift.

## Git workflow

- rama `main` para código estable
- ramas temáticas como `feature/...`, `fix/...`, `docs/...`, `refactor/...`, `chore/...`
- commits con Conventional Commits y descripción en español

## Conventional Commits

Formato:

```text
tipo(ámbito): descripción en español
```

Ejemplo:

```text
feat(button): crea componente botón base
```

## Roadmap

### Fase 1 — MVP

- Foundations
- Tokens
- Button
- Input
- Badge
- Card
- Storybook
- Portfolio Home

### Fase 2

- Modal
- Select
- Checkbox
- Radio
- Tabs
- Alert
- Tooltip

### Fase 3

- Themes
- Dark mode
- Motion
- advanced tokens
- Figma integration

### Fase 4

- npm package
- documentation
- versioning
- changelog
- release workflow
