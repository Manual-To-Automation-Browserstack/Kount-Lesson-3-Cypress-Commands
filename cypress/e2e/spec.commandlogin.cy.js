

var url = 'https://practicetestautomation.com/practice-test-login/';
var username = 'student';
var password = 'Password123'
var wrongUsername = 'wrongstudent';
var wrongPassword = 'wrongPassword123';

describe('A simple login test using the Command Model', () => {
it('should login successfully', () => {
    cy.visit(url);

    cy.login(username, password);
  
    cy.log(cy.url());

    cy.url().should('include', 'logged-in-successfully');
})

it('should fail to login using the Command Model', () => {
    cy.visit(url);

    cy.login(wrongUsername, wrongPassword);

    cy.get('#error').should('be.visible');
})

})