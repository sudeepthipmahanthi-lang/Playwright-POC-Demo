const { test, expect } = require('@playwright/test');

const users = require('../test-data/users.json');

users.forEach(user => {

    test(`Login with ${user.email}`, async ({ page }) => {

        await page.goto('https://rahulshettyacademy.com/client');

        await page.fill('#userEmail', user.email);

        await page.fill('#userPassword', user.password);

        await page.click('#login');

        await expect(
            page.locator('text=ZARA COAT 3')
        ).toBeVisible();

    });

});