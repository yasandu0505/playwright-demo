import { test, expect } from '@playwright/test';

test('Login and save the context', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'hi123');
    await page.click('button[type="submit"]');
    await page.context().storageState({ path: 'auth.json' });
});


test.use({ storageState: 'auth.json' });

test('Dashboard loads for logged-in user', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await expect(page.getByText('Dashboard')).toBeVisible();
});