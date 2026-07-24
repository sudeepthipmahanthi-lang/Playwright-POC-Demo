class CartPage {

    constructor(page) {
        this.page = page;
    }

    async checkout() {
        await this.page.locator('.totalRow button').click();
    }
}

module.exports = { CartPage };
