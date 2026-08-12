import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  render: (args: Partial<InputComponent>) => ({
    props: args,
    template: `<app-input [label]="label" [placeholder]="placeholder" [type]="type" [disabled]="disabled" [state]="state"></app-input>`,
  }),
  argTypes: {
    state: { options: ['default', 'error'], control: { type: 'select' } },
    type: { options: ['text', 'email', 'search'], control: { type: 'select' } },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = { args: { label: 'Nombre', placeholder: 'Tu nombre', type: 'text', disabled: false, state: 'default' } };
export const Error: Story = { args: { label: 'Correo', placeholder: 'correo@ejemplo.cl', type: 'email', disabled: false, state: 'error' } };
export const Disabled: Story = { args: { label: 'Desactivado', placeholder: 'No disponible', type: 'text', disabled: true, state: 'default' } };
