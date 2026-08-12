import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type InputState = 'default' | 'error';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="c-input" [class.c-input--error]="state === 'error'">
      <span class="c-input__label" *ngIf="label">{{ label }}</span>
      <input
        [type]="type"
        [value]="value"
        [disabled]="disabled"
        [attr.aria-invalid]="state === 'error' ? 'true' : null"
        [attr.aria-label]="label || ariaLabel"
        [placeholder]="placeholder"
        (input)="onInput($event)"
      />
    </label>
  `,
  styles: `
    :host {
      display: block;
    }

    .c-input {
      display: grid;
      gap: 0.5rem;
    }

    .c-input__label {
      font-size: var(--font-size-label);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }

    input {
      width: 100%;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface);
      color: var(--color-text);
      padding: 0.8rem 0.9rem;
      transition:
        border-color var(--motion-fast),
        box-shadow var(--motion-fast);
    }

    input:focus-visible {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(37, 75, 58, 0.12);
      outline: none;
    }

    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--color-surface-muted);
    }

    .c-input--error input {
      border-color: var(--color-error);
      box-shadow: 0 0 0 3px rgba(173, 63, 45, 0.12);
    }
  `,
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'search' = 'text';
  @Input() value = '';
  @Input() disabled = false;
  @Input() state: InputState = 'default';
  @Input() ariaLabel = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }
}
