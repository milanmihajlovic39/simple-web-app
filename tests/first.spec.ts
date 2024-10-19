import { FirstPage } from "./pages/FirstPage";
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

test.describe('Test page functionality', () => {
    let firstPage: FirstPage;

    test.beforeEach(async ({ page }) => {
        firstPage = new FirstPage(page);
        await page.goto(BASE_URL);
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


