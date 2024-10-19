const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

test('homepage has correct title', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle('TypeScript Test Page');
});


