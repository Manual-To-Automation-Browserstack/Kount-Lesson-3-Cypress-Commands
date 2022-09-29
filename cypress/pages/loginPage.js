class loginPage {

    elements = {
        usernameField : () => cy.get('#username'),
        passwordField : () => cy.get('#password'),
        submitButton : () => cy.get('#submit'),
        errorMessage : () => cy.get('#error'),
    }

    login(username, password) {
        this.elements.usernameField().type(username);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
    }
}

module.exports = new loginPage();