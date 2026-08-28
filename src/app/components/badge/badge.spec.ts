import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BadgeComponent } from './badge';

describe('BadgeComponent', () => {
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    fixture.detectChanges();
  });

  it('renders a span with the base badge class', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span).toBeTruthy();
    expect(span.classList).toContain('c-badge');
  });

  it('applies the correct variant class', () => {
    fixture.componentRef.setInput('variant', 'success');
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('span');
    expect(span.classList).toContain('c-badge--success');
  });

  it('renders as non-interactive content without a misleading role', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span.tagName).toBe('SPAN');
    expect(span.getAttribute('role')).toBeNull();
    expect(span.querySelector('button, a, input')).toBeNull();
  });
});
