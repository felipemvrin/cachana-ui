import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
  });

  it('renders an article element with the base card class', () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article).toBeTruthy();
    expect(article.classList).toContain('c-card');
  });

  it('applies the featured class when variant is featured', () => {
    fixture.componentRef.setInput('variant', 'featured');
    fixture.detectChanges();
    const article = fixture.nativeElement.querySelector('article');
    expect(article.classList).toContain('c-card--featured');
  });

  it('keeps a distinct visual treatment for the featured variant', () => {
    const styles = (
      (CardComponent as unknown as { ɵcmp?: { styles?: string[] } }).ɵcmp?.styles ?? []
    ).join(' ');

    expect(styles).toMatch(
      /\.c-card--featured(?:\[[^\]]+\])?\s*\{[^}]*box-shadow:\s*var\(--shadow-05\);/s,
    );
  });
});
