import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
  it('renders a button with the provided content', () => {
    const component = new ButtonComponent();
    component.variant = 'primary';

    const variantClass = component['variantClass'] as string;

    expect(variantClass).toBe('c-button--primary');
    expect(component.disabled).toBe(false);
  });

  it('disables the button when disabled is true', () => {
    const component = new ButtonComponent();
    component.disabled = true;

    const variantClass = component['variantClass'] as string;

    expect(component.disabled).toBe(true);
    expect(variantClass).toBe('c-button--primary');
  });
});
