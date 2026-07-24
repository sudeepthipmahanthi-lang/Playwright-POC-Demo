const { test, expect } = require('@playwright/test');

test('Dashboard with saved login', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client');

    console.log('Current URL = ', page.url());

    await page.waitForTimeout(5000);

    const pageContent = await page.textContent('body');
    console.log(pageContent);

});
