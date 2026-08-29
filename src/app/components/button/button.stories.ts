import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use Button for explicit actions. Keep the label short, use the native button element, and preserve a visible focus state.',
      },
    },
  },
  render: (args: Partial<ButtonComponent>) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" [disabled]="disabled">Acción</app-button>`,
  }),
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    disabled: { control: { type: 'boolean' } },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = { args: { variant: 'primary', disabled: false } };
export const Secondary: Story = { args: { variant: 'secondary', disabled: false } };
export const Ghost: Story = { args: { variant: 'ghost', disabled: false } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const Hover: Story = {
  args: { variant: 'primary', disabled: false },
  parameters: {
    docs: {
      description: { story: 'Hover the button to verify the small pressed-label movement.' },
    },
  },
};
export const Focus: Story = {
  args: { variant: 'secondary', disabled: false },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [disabled]="disabled">Acción enfocada</app-button>`,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const button = canvasElement.querySelector('button');
    button?.focus();
  },
  parameters: {
    docs: {
      description: {
        story: 'The button receives focus on load and keeps a visible focus outline.',
      },
    },
  },
};
export const Active: Story = {
  args: { variant: 'primary', disabled: false },
  parameters: {
    docs: {
      description: {
        story: 'Press and hold the button to verify the active offset and shadow behavior.',
      },
    },
  },
};
