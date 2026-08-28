import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cachana',
      values: [
        { name: 'cachana', value: '#f5efdd' },
        { name: 'forest', value: '#2e8e3e' },
        { name: 'micro', value: '#ffd100' },
      ],
    },
  },
};

export default preview;
