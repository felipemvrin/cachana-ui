import { Component, Input } from '@angular/core';

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <span class="c-badge" [class]="'c-badge--' + variant">
      <ng-content></ng-content>
    </span>
  `,
  styles: `
    .c-badge {
      display: inline-flex;
      align-items: center;
      border-radius: var(--radius-md);
      padding: var(--space-1) var(--space-2);
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: var(--ls-mono);
      text-transform: uppercase;
      font-weight: var(--fw-bold);
      border: 2px solid var(--color-border-strong);
    }

    .c-badge--neutral {
      background: var(--color-surface-sunken);
      border-color: color-mix(in srgb, var(--color-surface-sunken) 78%, var(--color-text-primary));
      color: var(--color-text-primary);
    }

    .c-badge--success {
      background: rgba(123, 164, 58, 0.16);
      border-color: color-mix(in srgb, var(--color-verde-sur) 70%, var(--color-text-primary));
      color: var(--color-success-text);
    }

    .c-badge--warning {
      background: rgba(166, 93, 46, 0.16);
      border-color: color-mix(in srgb, var(--color-lenga) 70%, var(--color-text-primary));
      color: var(--color-warning-text);
    }

    .c-badge--error {
      background: rgba(229, 57, 53, 0.16);
      border-color: color-mix(in srgb, var(--color-rojo-micro) 70%, var(--color-text-primary));
      color: var(--color-error-text);
    }
  `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
}
