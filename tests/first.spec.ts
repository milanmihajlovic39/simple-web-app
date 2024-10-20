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
        
        // Mock the POST request to BASE_URL/check
        await page.route('**/check', (route) => {
            const requestData = route.request().postDataJSON();
            
            // Create a mock response based on the input data
            const mockResponse = {
                firstName: requestData.firstName,
                age: requestData.age,
                isStudent: requestData.isStudent,
                message: "Data processed successfully!",
            };

            // Respond with the mock data
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockResponse),
            });
        });
    });

    test('homepage has correct title', async ({ page }) => {
        await expect(page).toHaveTitle('TypeScript Test Page');
    });
    
    test('should display all entered data with correct information', async ({ page }) => {
        await firstPage.firstNameField.fill('Milan');
        await firstPage.ageField.fill('29');
        await firstPage.isStudentCheckbox.check();
        await firstPage.applyDataButton.click();
        
        // Validate that the displayed data matches the input
        await expect(firstPage.displayFirstNameLabel).toHaveText('Milan');
        await expect(firstPage.displayAgeLabel).toHaveText('29');
        await expect(firstPage.displayIsStudentLabel).toHaveText('Yes');
    });
});
