import { Component, Input } from '@angular/core';

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="c-badge" [ngClass]="variantClass">
  template: `
    <span class="c-badge" [class]="'c-badge--' + variant">
      <ng-content></ng-content>
    </span>
  `,
  styles: `
    .c-badge {
      display: inline-flex;
      align-items: center;
      border-radius: var(--radius-pill);
      padding: 0.35rem 0.7rem;
      font-size: var(--font-size-label);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 700;
      border: 1px solid transparent;
    }

    .c-badge--neutral {
      background: var(--color-surface-muted);
      color: var(--color-text);
      border-color: var(--color-border);
    }

    .c-badge--success {
      background: rgba(61, 108, 82, 0.12);
      color: var(--color-success);
      border-color: rgba(61, 108, 82, 0.35);
    }

    .c-badge--warning {
      background: rgba(215, 145, 45, 0.12);
      color: var(--color-warning);
      border-color: rgba(215, 145, 45, 0.35);
    }

    .c-badge--error {
      background: rgba(173, 63, 45, 0.12);
      color: var(--color-error);
      border-color: rgba(173, 63, 45, 0.35);
    }
  `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';

  protected get variantClass(): string {
    return `c-badge--${this.variant}`;
  }
}
