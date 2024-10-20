import { Page } from '@playwright/test';

export const setupMocks = (page: Page) => {
    // Mock the POST request to BASE_URL/check
    page.route('**/check', async (route) => {
        const requestData = route.request().postDataJSON();

        // Create a mock response based on the input data
        const mockResponse = {
            firstName: requestData.firstName,
            age: requestData.age,
            isStudent: requestData.isStudent,
            message: "Data processed successfully!",
        };

        // Respond with the mock data
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockResponse),
        });
    });
};
