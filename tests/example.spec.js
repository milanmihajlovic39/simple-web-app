const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

test('homepage has title and button', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Simple Web App/);
    const button = await page.locator('button#clickMe');
    await expect(button).toBeVisible();
});

test('button click updates message', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('button#clickMe');
    await expect(page.locator('#message')).toHaveText('Button was clicked!');
});
