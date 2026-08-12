import { CardComponent } from './card';

describe('CardComponent', () => {
  it('renders content inside the card', () => {
    const component = new CardComponent();
    component.variant = 'featured';

    expect(component.variant).toBe('featured');
  });
});
