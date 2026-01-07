import { test , expect } from '@playwright/test'


test.use({ storageState: 'auth.json' });

test("test the saved login context", async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
    await expect(page.getByText('Dashboard')).toBeVisible();
})