import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Shadow & Texture',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Material: Story = {
  render: () => ({
    template: `<main class="material-foundation"><h1>Shadow & Texture</h1><div class="material-grid"><div class="material material--soft">Relieve suave</div><div class="material material--stamp">Sello sólido</div><div class="material material--paper">Papel texturado</div><img src="/assets/patterns/wallmapu-compass.svg" alt="Compass rose" /></div></main>`,
    styles: [
      `.material-foundation { min-height: 100vh; padding: 32px; background: var(--color-background); color: var(--color-text-primary); font-family: var(--font-body); } .material-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 24px; align-items: center; } .material { min-height: 120px; display: grid; place-items: center; padding: 16px; background: var(--color-surface); border: 2px solid var(--color-border-strong); border-radius: var(--radius-xl); } .material--soft { box-shadow: var(--shadow-03); } .material--stamp { box-shadow: var(--shadow-05); } .material--paper { background-color: var(--color-surface); background-image: url('/assets/textures/paper-noise.svg'); background-blend-mode: multiply; } img { width: 120px; color: var(--color-wallmapu-azul); }`,
    ],
  }),
};
