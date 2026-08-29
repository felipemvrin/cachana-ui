import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use Card to group a self-contained piece of content. Add a meaningful heading when the content needs a navigable section label.',
      },
    },
  },
  render: (args: Partial<CardComponent>) => ({
    props: args,
    template: `<app-card [variant]="variant"><h3>Tarjeta Cachaña</h3><p>Contenido de ejemplo para la narrativa del sistema.</p></app-card>`,
  }),
  argTypes: {
    variant: {
      options: ['default', 'featured'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = { args: { variant: 'default' } };
export const Featured: Story = { args: { variant: 'featured' } };
