import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="c-button"
      [class]="variantClass"
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
      border: 1px solid transparent;
      border-radius: var(--radius-pill);
      background: var(--color-primary);
      color: #fff;
      padding: 0.7rem 1.2rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition:
        background var(--motion-fast),
        transform var(--motion-fast),
        box-shadow var(--motion-fast);
      box-shadow: var(--shadow-sm);
    }

    .c-button:hover:not(:disabled) {
      transform: translateY(-1px);
      filter: brightness(0.98);
    }

    .c-button:active:not(:disabled) {
      transform: translateY(0);
    }

    .c-button:focus-visible {
      outline: 3px solid var(--color-accent);
      outline-offset: 2px;
    }

    .c-button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      box-shadow: none;
    }

    .c-button--primary {
      background: var(--color-primary);
      color: #fff;
    }

    .c-button--secondary {
      background: var(--color-surface);
      border-color: var(--color-border);
      color: var(--color-text);
    }

    .c-button--ghost {
      background: transparent;
      border-color: var(--color-border);
      color: var(--color-text);
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
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  protected get variantClass(): string {
    return `c-button--${this.variant}`;
  }
}
