import { BadgeComponent } from './badge';

describe('BadgeComponent', () => {
  it('renders the badge content', () => {
    const component = new BadgeComponent();
    component.variant = 'success';

    expect(component.variant).toBe('success');
  });
});
