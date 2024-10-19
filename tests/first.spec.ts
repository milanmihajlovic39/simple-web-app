import { FirstPage } from "./pages/FirstPage";
import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL;

if (!baseUrl) {
  throw new Error('BASE_URL environment variable is not defined');
}

test.describe('Test page functionality', () => {
    let firstPage: FirstPage;

    test.beforeEach(async ({ page }) => {
        firstPage = new FirstPage(page);
        await page.goto(baseUrl);
    });

    test('homepage has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('TypeScript Test Page');
    });
    
    test('should display all entered data with correct information', async ({ page }) => {
        await firstPage.firstNameField.fill('Milan');
        await firstPage.ageField.fill('29');
        await firstPage.isStudentCheckbox.check();
        await firstPage.applyDataButton.click();
        await expect(firstPage.displayFirstNameLabel).toHaveText('Milan');
        await expect(firstPage.displayAgeLabel).toHaveText('29');
        await expect(firstPage.displayIsStudentLabel).toHaveText('Yes');
    });
});


