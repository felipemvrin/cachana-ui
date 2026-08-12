import { InputComponent } from './input';

describe('InputComponent', () => {
  it('renders the provided label and placeholder', () => {
    const component = new InputComponent();
    component.label = 'Nombre';
    component.placeholder = 'Tu nombre';

    expect(component.label).toBe('Nombre');
    expect(component.placeholder).toBe('Tu nombre');
  });

  it('marks the field as invalid when state is error', () => {
    const component = new InputComponent();
    component.state = 'error';
    component.onInput({ target: { value: 'canch@' } } as unknown as Event);

    expect(component.state).toBe('error');
    expect(component.value).toBe('canch@');
  });
});
