import { test, expect } from '@playwright/test'

test.use({ storageState: 'auth.json' })

test('test mock api working', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
    await expect(page.getByText('John')).toBeVisible();
    await expect(page.getByText('Patrick')).toBeVisible();
})


test('test backward navigation from the dashbaord', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
    await page.click('text=Back Home');
    await expect(page).toHaveURL('http://localhost:3000/');
})