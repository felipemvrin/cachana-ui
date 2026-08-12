# Conventional Commits en español

## Objetivo

Esta skill establece la política permanente de commits para Cachaña UI.

## Formato obligatorio

`tipo(ámbito): descripción en español`

Ejemplos válidos:

- `feat(button): crea componente botón base`
- `feat(tokens): incorpora tokens de color`
- `style(home): ajusta composición visual del hero`
- `docs(storybook): documenta variantes del botón`
- `test(input): agrega pruebas de estados del campo`
- `fix(card): corrige contraste del contenido`
- `chore(config): configura lint y prettier`

Ejemplos inválidos:

- `feat(button): add button component`
- `fix: update styles`
- `docs: add storybook`
- `style: improve UI`

## Tipos permitidos

- `feat`: nueva funcionalidad o componente
- `fix`: corrección de bug
- `docs`: documentación o guías
- `style`: cambios visuales o de formato
- `refactor`: reestructuración sin cambio funcional
- `perf`: mejoras de rendimiento
- `test`: pruebas unitarias o e2e
- `build`: cambios en dependencias o build tooling
- `ci`: integración continua
- `chore`: tareas de mantenimiento o configuración
- `revert`: revertir cambios previos

## Reglas

- La descripción del commit SIEMPRE debe estar en español.
- Los tipos convencionales permanecen en inglés porque forman parte del estándar.
- No mezclar cambios no relacionados en un mismo commit.
- No generar commits automáticamente sin que el usuario lo pida explícitamente.
- Mantener cada commit pequeño y trazable.

## Cómo elegir el ámbito

- Usa un nombre corto y técnico en inglés cuando corresponda: `button`, `tokens`, `home`, `config`, `storybook`.
- Si el cambio afecta varios componentes o una pieza transversal, usa un ámbito general como `tokens`, `app`, o `config`.
- Si no se puede definir un ámbito claro, usa un alcance mínimo y descriptivo.

## Recomendación de flujo

- Trabaja sobre una rama temática como `feature/...`, `fix/...`, `docs/...`, `refactor/...`, `chore/...`.
- Mantén el código estable en `main`.
- Antes de cualquier commit, asegura que el código esté validado por lint y pruebas relevantes.
