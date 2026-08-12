import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  render: (args: Partial<BadgeComponent>) => ({
    props: args,
    template: `<app-badge [variant]="variant">Diseño</app-badge>`,
  }),
  argTypes: {
    variant: {
      options: ['neutral', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Neutral: Story = { args: { variant: 'neutral' } };
export const Success: Story = { args: { variant: 'success' } };
export const Warning: Story = { args: { variant: 'warning' } };
export const Error: Story = { args: { variant: 'error' } };
