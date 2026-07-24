const { test } = require('@playwright/test');

test('Login and Save Session', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client');

    await page.fill('#userEmail', 'testuserhcl@gmail.com');
    await page.fill('#userPassword', 'Test@123');

    await page.click('#login');

    await page.waitForSelector('.card-body');

    await page.context().storageState({
        path: 'auth/user.json'
    });

    console.log('Storage state saved');
});