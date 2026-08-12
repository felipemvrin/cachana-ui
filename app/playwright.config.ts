import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  testMatch: ['**/*.e2e.spec.ts'],
  use: {
    baseURL: 'http://127.0.0.1:4200',
    headless: true,
  },
  reporter: 'list',
});
