import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Color',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Palette: Story = {
  render: () => ({
    template: `
      <section class="foundation foundation--colors">
        <h1>Color</h1>
        <div class="swatches">
          <div class="swatch swatch--bosque">Bosque</div>
          <div class="swatch swatch--arrayan">Arrayan</div>
          <div class="swatch swatch--lago">Lago</div>
          <div class="swatch swatch--tierra">Tierra</div>
          <div class="swatch swatch--arena">Arena</div>
          <div class="swatch swatch--micro">Micro amarillo</div>
          <div class="swatch swatch--rojo">Rojo micro</div>
          <div class="swatch swatch--trigo">Trigo</div>
        </div>
      </section>
    `,
    styles: [
      `.foundation { padding: 32px; background: var(--color-background); color: var(--color-text-primary); font-family: var(--font-body); } .swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; } .swatch { min-height: 96px; padding: 12px; border: 2px solid var(--color-border-strong); font-weight: 700; } .swatch--bosque { background: var(--color-bosque); color: white; } .swatch--arrayan { background: var(--color-arrayan); color: white; } .swatch--lago { background: var(--color-lago); color: white; } .swatch--tierra { background: var(--color-tierra); color: white; } .swatch--arena { background: var(--color-arena); } .swatch--micro { background: var(--color-micro-amarillo); } .swatch--rojo { background: var(--color-rojo-micro); color: white; } .swatch--trigo { background: var(--color-trigo); }`,
    ],
  }),
};
