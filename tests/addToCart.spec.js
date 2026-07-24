const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test('Add Product To Cart', async ({ page }) => {

    const productName = 'ZARA COAT 3';

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'testuserhcl@gmail.com',
        'Test@123'
    );

    await dashboardPage.addProductToCart(productName);

    await dashboardPage.goToCart();

    await expect(
        page.locator(`h3:has-text("${productName}")`)
    ).toBeVisible();
});