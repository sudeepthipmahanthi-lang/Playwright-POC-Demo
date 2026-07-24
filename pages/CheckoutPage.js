class CheckoutPage {

    constructor(page) {
        this.page = page;
    }

    async selectCountry(country) {

        await this.page
            .locator("[placeholder='Select Country']")
            .pressSequentially(country);

        await this.page
            .locator('.ta-results button')
            .first()
            .click();
    }

    async placeOrder() {
        await this.page.locator('.action__submit').click();
    }
}

module.exports = { CheckoutPage };