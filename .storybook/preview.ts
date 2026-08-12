import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cachana',
      values: [
        { name: 'cachana', value: '#f6f1e7' },
        { name: 'forest', value: '#183b2d' },
        { name: 'micro', value: '#f7c736' },
      ],
    },
  },
};

export default preview;
