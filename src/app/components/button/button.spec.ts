import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
  });

  it('renders a button element with the base class', () => {
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.classList).toContain('c-button');
  });

  it('applies the correct variant class', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('c-button--secondary');
  });

  it('applies sm size class', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('c-button--sm');
  });

  it('disables the button when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.disabled).toBe(true);
  });

  it('sets the type attribute', () => {
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.getAttribute('type')).toBe('submit');
  });

  it('keeps a pressed visual state without the resting shadow on active', () => {
    const styles = (
      (ButtonComponent as unknown as { ɵcmp?: { styles?: string[] } }).ɵcmp?.styles ?? []
    ).join(' ');

    expect(styles).toMatch(
      /\.c-button(?:\[[^\]]+\])?:active:not\(:disabled\)\s*\{[^}]*box-shadow:\s*var\(--shadow-none\);/s,
    );
  });
});
