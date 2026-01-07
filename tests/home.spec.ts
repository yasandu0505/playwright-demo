import { test, expect } from '@playwright/test'

test('home page loads and shows heading', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByText('Welcome!')).toBeVisible();
});