import { test, expect } from '@playwright/test';

test('home page loads with the main title and navigation', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /Un sistema de diseño con alma de carretera y bosque/i }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /Inicio/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Ver proyecto/i })).toBeVisible();
});
