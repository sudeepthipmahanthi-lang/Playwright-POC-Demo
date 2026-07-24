

class DashboardPage {

    constructor(page) {
        this.page = page;
    }

    async addProductToCart(productName) {

        await this.page.locator('.card-body')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add To Cart' })
            .click();
    }

    async goToCart() {

        await this.page
            .locator("[routerlink='/dashboard/cart']")
            .click();
    }
}

module.exports = { DashboardPage };