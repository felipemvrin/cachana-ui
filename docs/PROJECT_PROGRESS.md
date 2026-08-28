# Avance del proyecto

Última actualización: 2026-08-28

## Fase actual

**Fase:** endurecimiento de fundamentos y flujo de trabajo
**Estado:** Completado

## Completado

- Tokens visuales de color, tipografía, spacing, radios y sombras.
- Textura de papel y patrón geométrico Wallmapu.
- Componentes Button, Input, Badge y Card con estilos tokenizados.
- Stories de Foundations y configuración global de Storybook.
- Enlace desde la home hacia Storybook.
- Badge compacto con bordes relacionados a sus fondos.
- Box shadow común en Button, con retirada intencional durante `:active`.
- `display-title` usando el ancho disponible de `hero__content`.
- Saneamiento de colores y gradientes hardcodeados en la home.
- Comando de lint operativo para los estilos actuales.

## Validaciones

- `npm run lint`: correcto.
- `npm test`: 19 tests aprobados.
- `npm run build`: correcto.
- `npm run build-storybook`: correcto en la validación anterior.
- `git diff --check`: correcto.

## Pendiente priorizado

| Prioridad | Tarea                                             | Estado      |
| --------- | ------------------------------------------------- | ----------- |
| Alta      | Añadir pruebas de accesibilidad para componentes  | No iniciado |
| Alta      | Documentar estados y casos de uso en Storybook    | En progreso |
| Media     | Migrar aliases heredados de tokens y retirarlos   | No iniciado |
| Media     | Separar la librería Angular de la home/portfolio  | No iniciado |
| Media     | Configurar CI para lint, tests, build y Storybook | No iniciado |
| Baja      | Revisar tamaño de bundles y warnings de Storybook | No iniciado |
| Baja      | Revisar vulnerabilidades de `npm audit`           | No iniciado |

## Próxima acción

Añadir pruebas de accesibilidad para Button, Input, Badge y Card, empezando por navegación con teclado, labels, estados disabled y atributos ARIA.

## Riesgos y notas

- Storybook todavía muestra warnings informativos de tamaño de bundles y archivos no utilizados en su `tsconfig`.
- El hook `pre-commit` aún intenta ejecutar ESLint sobre Markdown y requiere saneamiento separado.
- No ejecutar commits o pushes desde el skill sin una solicitud explícita.
- Cada actualización debe reemplazar estados con evidencia nueva y conservar solo el contexto útil para decidir el siguiente paso.
