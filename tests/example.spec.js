const { test, expect } = require('@playwright/test');

test('homepage has title and button', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Simple Web App/);
    const button = await page.locator('button#clickMe');
    await expect(button).toBeVisible();
});

test('button click updates message', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('button#clickMe');
    await expect(page.locator('#message')).toHaveText('Button was clicked!');
});
