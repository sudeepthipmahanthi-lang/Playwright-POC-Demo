class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = '#userEmail';
        this.password = '#userPassword';
        this.loginButton = '#login';
    }

    async navigate() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async login(email, password) {
        await this.page.fill(this.email, email);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = { LoginPage };