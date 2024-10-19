import { Locator, Page } from '@playwright/test';

export class FirstPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly ageField: Locator;
    readonly isStudentCheckbox: Locator;
    readonly applyDataButton: Locator;
    readonly displayFirstNameLabel: Locator;
    readonly displayAgeLabel: Locator;
    readonly displayIsStudentLabel: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.firstNameField = page.locator('#firstName');
      this.ageField = page.locator('#age');
      this.isStudentCheckbox = page.locator('#isStudent');
      this.applyDataButton = page.locator('#applyData');
      this.displayFirstNameLabel = page.locator('#displayFirstName');
      this.displayAgeLabel = page.locator('#displayAge');
      this.displayIsStudentLabel = page.locator('#displayIsStudent');
    }
}
