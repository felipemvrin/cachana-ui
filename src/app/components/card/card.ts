import { Component, Input } from '@angular/core';

export type CardVariant = 'default' | 'featured';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <article class="c-card" [class.c-card--featured]="variant === 'featured'">
      <ng-content></ng-content>
    </article>
  `,
  styles: `
    .c-card {
      background: var(--color-surface);
      border: 2px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-03);
      padding: var(--space-6);
      transition:
        box-shadow var(--motion-normal),
        transform var(--motion-normal);
    }

    .c-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: var(--shadow-05);
    }

    .c-card--featured {
      background: var(--color-surface);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-05);
    }
  `,
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
}
