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
      border-radius: var(--radius-none);
      padding: var(--space-2) var(--space-3);
      font-family: var(--font-mono);
      font-size: var(--fs-xs);
      letter-spacing: var(--ls-mono);
      text-transform: uppercase;
      font-weight: var(--fw-bold);
      border: 2px solid var(--color-border-strong);
    }

    .c-badge--neutral {
      background: var(--color-surface-sunken);
      color: var(--color-text-primary);
    }

    .c-badge--success {
      background: rgba(123, 164, 58, 0.16);
      color: var(--color-success-text);
    }

    .c-badge--warning {
      background: rgba(166, 93, 46, 0.16);
      color: var(--color-warning-text);
    }

    .c-badge--error {
      background: rgba(229, 57, 53, 0.16);
      color: var(--color-error-text);
    }
  `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
}
