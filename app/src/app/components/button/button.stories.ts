import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  render: (args: Partial<ButtonComponent>) => ({
    props: args,
    template: `<app-button [variant]="variant" [disabled]="disabled">Acción</app-button>`,
  }),
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = { args: { variant: 'primary', disabled: false } };
export const Secondary: Story = { args: { variant: 'secondary', disabled: false } };
export const Ghost: Story = { args: { variant: 'ghost', disabled: false } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
