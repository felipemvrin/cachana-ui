import { vi } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InputComponent } from './input';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let component: InputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders a label and input', () => {
    expect(fixture.nativeElement.querySelector('label')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('input')).toBeTruthy();
  });

  it('shows the label text when label is provided', () => {
    fixture.componentRef.setInput('label', 'Nombre');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('.c-input__label');
    expect(span).toBeTruthy();
    expect(span.textContent.trim()).toBe('Nombre');
  });

  it('hides the label span when label is empty', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.c-input__label')).toBeNull();
  });

  it('uses the visible label as the input accessible name', () => {
    fixture.componentRef.setInput('label', 'Nombre');
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('aria-label')).toBe('Nombre');
  });

  it('disables the native input when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBe(true);
  });

  it('applies error class and aria-invalid when state is error', () => {
    fixture.componentRef.setInput('state', 'error');
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    const input = fixture.nativeElement.querySelector('input');
    expect(label.classList).toContain('c-input--error');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('does not set aria-label when neither label nor ariaLabel is provided', () => {
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('aria-label')).toBeNull();
  });

  it('emits valueChange when the input event fires', () => {
    const spy = vi.fn();
    component.valueChange.subscribe(spy);
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'hola';
    input.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith('hola');
  });
});
