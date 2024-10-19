import { TestPage } from "./pages/TestingPage";


const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

test.describe('Test page functionality', () => {
    let testPage: TestPage;

    test.beforeEach(async ({ page }) => {
        testPage = new TestPage(page);
        await page.goto(BASE_URL);
    });

    test('homepage has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('TypeScript Test Page');
    });
    
    test.only('should display all entered data with correct information', async ({ page }) => {
        await testPage.firstNameField.fill('Milan');
        await testPage.ageField.fill('29');
        await testPage.isStudentCheckbox.check();
        await testPage.applyDataButton.click();
        await expect(testPage.displayFirstNameLabel).toHaveText('Milan');
        await expect(testPage.displayAgeLabel).toHaveText('29');
        await expect(testPage.displayIsStudentLabel).toHaveText('Yes');
    });
});


