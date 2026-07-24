const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Place Order', async ({ page }) => {

console.log(LoginPage);
console.log(DashboardPage);
console.log(CartPage);
console.log(CheckoutPage);


    const productName = 'ZARA COAT 3';

    // Create page objects
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.navigate();

    await loginPage.login(
        'testuserhcl@gmail.com',
        'Test@123'
    );

    // Add Product
    await dashboardPage.addProductToCart(productName);

    // Go To Cart
    await dashboardPage.goToCart();

    // Verify Product
    await expect(
        page.locator(`h3:has-text("${productName}")`)
    ).toBeVisible();

    // Checkout
    await cartPage.checkout();

    // Select Country
    await checkoutPage.selectCountry('India');

    // Place Order
    await checkoutPage.placeOrder();

    // Verify Confirmation
   await expect(page.locator('.hero-primary')
).toContainText('Thankyou for the order');

});