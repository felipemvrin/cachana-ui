import { Component, EventEmitter, Input, Output } from '@angular/core';

export type InputState = 'default' | 'error';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <label class="c-input" [class.c-input--error]="state === 'error'">
      @if (label) {
        <span class="c-input__label">{{ label }}</span>
      }
      <input
        [type]="type"
        [value]="value"
        [disabled]="disabled"
        [attr.aria-invalid]="state === 'error' ? 'true' : null"
        [attr.aria-label]="label || ariaLabel || null"
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
      gap: var(--space-2);
    }

    .c-input__label {
      font-size: var(--fs-xs);
      font-weight: var(--fw-bold);
      letter-spacing: var(--ls-mono);
      text-transform: uppercase;
      color: var(--color-text-muted);
    }

    input {
      width: 100%;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface-sunken);
      color: var(--color-text-primary);
      padding: 0.8rem 0.9rem;
      transition:
        border-color var(--motion-fast),
        box-shadow var(--motion-fast);
    }

    input:focus-visible {
      border-color: var(--color-azul-micro);
      box-shadow: 0 0 0 3px rgba(0, 87, 166, 0.14);
      outline: none;
    }

    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--color-border);
    }

    .c-input--error input {
      border-color: var(--color-error);
      box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.14);
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
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
