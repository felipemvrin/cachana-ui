import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Spacing & Radius',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => ({
    template: `<main class="spacing-foundation"><h1>Spacing & Radius</h1><div class="space-row"><span class="space space--1">4</span><span class="space space--2">8</span><span class="space space--3">12</span><span class="space space--4">16</span><span class="space space--6">24</span><span class="space space--8">32</span></div><div class="radius-row"><span class="radius radius--sm">sm</span><span class="radius radius--md">md</span><span class="radius radius--lg">lg</span><span class="radius radius--xl">xl</span></div></main>`,
    styles: [
      `.spacing-foundation { padding: 32px; background: var(--color-background); color: var(--color-text-primary); font-family: var(--font-body); } .space-row, .radius-row { display: flex; align-items: end; gap: 12px; margin-block: 24px; flex-wrap: wrap; } .space, .radius { display: grid; place-items: center; background: var(--color-bosque); color: white; border: 2px solid var(--color-border-strong); } .space--1 { width: 40px; height: 40px; } .space--2 { width: 48px; height: 48px; } .space--3 { width: 56px; height: 56px; } .space--4 { width: 64px; height: 64px; } .space--6 { width: 72px; height: 72px; } .space--8 { width: 80px; height: 80px; } .radius { width: 80px; height: 56px; background: var(--color-micro-amarillo); color: var(--color-text-primary); } .radius--sm { border-radius: var(--radius-sm); } .radius--md { border-radius: var(--radius-md); } .radius--lg { border-radius: var(--radius-lg); } .radius--xl { border-radius: var(--radius-xl); }`,
    ],
  }),
};
