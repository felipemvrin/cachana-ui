import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      class="c-button"
      [class]="variantClass"
      [class.c-button--sm]="size === 'sm'"
      [class.c-button--lg]="size === 'lg'"
      [attr.type]="type"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled ? 'true' : null"
    >
      <span class="c-button__content">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    .c-button {
      appearance: none;
      border: 2px solid transparent;
      border-radius: var(--radius-md);
      background: var(--color-bosque);
      color: var(--color-text-inverse);
      padding: var(--space-3) var(--space-5);
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      letter-spacing: var(--ls-heading);
      cursor: pointer;
      transition:
        background var(--motion-fast),
        transform var(--motion-fast),
        box-shadow var(--motion-fast);
      box-shadow: var(--shadow-04);
    }

    .c-button:hover:not(:disabled) {
      transform: translate(1px, 1px);
    }

    .c-button:active:not(:disabled) {
      transform: translate(2px, 3px);
      box-shadow: var(--shadow-none);
    }

    .c-button:focus-visible {
      outline: 3px solid var(--color-azul-micro);
      outline-offset: 2px;
    }

    .c-button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .c-button--primary {
      background: var(--color-micro-amarillo);
      border-color: var(--color-border-strong);
      color: var(--color-text-primary);
    }

    .c-button--secondary {
      background: var(--color-surface);
      border-color: var(--color-border-strong);
      color: var(--color-text-primary);
    }

    .c-button--ghost {
      background: transparent;
      border-color: var(--color-border-strong);
      color: var(--color-text-primary);
    }

    .c-button--sm {
      padding: var(--space-2) var(--space-3);
      font-size: var(--fs-sm);
    }

    .c-button--lg {
      padding: var(--space-4) var(--space-6);
      font-size: var(--fs-md);
    }

    .c-button__content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  `,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  protected get variantClass(): string {
    return `c-button--${this.variant}`;
  }
}
