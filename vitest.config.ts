import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', '!src/**/*.e2e.spec.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    setupFiles: ['./src/test-setup.ts'],
  },
});
