---
name: project-progress
description: 'Use when the user asks to update project progress, review the current phase, know what remains, decide the next task, or maintain the project progress Markdown document. Read repository state and validations, then update docs/PROJECT_PROGRESS.md.'
---

# Project Progress

Mantén actualizado `docs/PROJECT_PROGRESS.md` como la fuente rápida de verdad sobre el avance del proyecto.

## Cuándo usarlo

Activa este skill cuando el usuario pida:

- actualizar el avance;
- saber qué queda pendiente;
- decidir con qué continuar;
- revisar el estado de una fase;
- documentar un hito técnico o de producto.

## Flujo de trabajo

1. Lee `docs/PROJECT_PROGRESS.md` si existe.
2. Ejecuta `git status --short --branch` y `git log -5 --oneline --decorate`.
3. Revisa los archivos relacionados con la fase actual y sus pruebas cercanas.
4. Ejecuta solo las validaciones relevantes para esa fase, por ejemplo `npm test`, `npm run build`, `npm run lint` o `npm run build-storybook`.
5. Actualiza `docs/PROJECT_PROGRESS.md` con hechos verificables:
   - fecha;
   - fase actual;
   - estado (`No iniciado`, `En progreso`, `Bloqueado` o `Completado`);
   - cambios completados;
   - validaciones ejecutadas;
   - pendientes priorizados;
   - próxima acción concreta;
   - riesgos o bloqueos.
6. No marques una tarea como completada sin una validación o evidencia clara.
7. No crees commits, ramas ni pushes automáticamente; solo documenta la recomendación, salvo que el usuario lo solicite expresamente.
8. Mantén el documento conciso y evita duplicar el historial completo de Git.

## Formato de salida

Después de actualizar el documento, responde en español con:

- la fase actual;
- la próxima acción recomendada;
- las validaciones realizadas;
- cualquier bloqueo real.

El código, nombres de variables y nombres técnicos deben permanecer en inglés, según las instrucciones del proyecto. La documentación se escribe en español.
