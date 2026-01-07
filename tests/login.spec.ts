import { test, expect } from '@playwright/test'

test("Testing the Login Flow - Success", async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'hi123');
    await page.click('button[type=submit]');

    await expect(page).toHaveURL('http://localhost:3000/dashboard');
    await expect(page.getByText('Dashboard')).toBeVisible();

});


test("Testing the Login Flow - Fail", async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    await page.fill('#email', 'tessdt@example.com');
    await page.fill('#password', 'hi123sd');
    await page.click('button[type=submit]');

    await expect(page).toHaveURL('http://localhost:3000/login');
    await expect(page.getByText('Invalid Credentials')).toBeVisible();

});



