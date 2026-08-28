import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => ({
    template: `<main class="type-foundation"><p class="eyebrow">Cachaña UI / Typography</p><h1>Señalética del sur</h1><h2>Diseño con territorio</h2><h3>Un sistema claro y cálido</h3><p>Inter mantiene la lectura cómoda en interfaces, mientras Bitter aporta carácter editorial a los encabezados.</p><code>ROUTE: BIOBIO / STATUS: READY</code></main>`,
    styles: [
      `.type-foundation { padding: 32px; background: var(--color-background); color: var(--color-text-primary); font-family: var(--font-body); } h1 { font: var(--fw-black) var(--fs-3xl)/var(--lh-display) var(--font-display); } h2, h3 { font-family: var(--font-heading); font-weight: var(--fw-bold); } .eyebrow, code { font-family: var(--font-mono); letter-spacing: var(--ls-mono); text-transform: uppercase; }`,
    ],
  }),
};
