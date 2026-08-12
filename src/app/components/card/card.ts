import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CardVariant = 'default' | 'featured';

@Component({
  selector: 'app-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="c-card" [class.c-card--featured]="variant === 'featured'">
      <ng-content></ng-content>
    </article>
  `,
  styles: `
    .c-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      padding: 1.5rem;
    }

    .c-card--featured {
      background: linear-gradient(135deg, rgba(247, 199, 54, 0.1), rgba(37, 75, 58, 0.08));
      border-color: rgba(37, 75, 58, 0.28);
    }
  `,
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
}
