const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'testuserhcl@gmail.com',
        'Test@123'
    );

    await expect(
        page.locator('text=ZARA COAT 3')
    ).toBeVisible();

});