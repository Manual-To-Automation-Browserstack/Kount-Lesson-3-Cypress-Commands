  import loginPage from "../pages/loginPage"

  var url = 'https://practicetestautomation.com/practice-test-login/';
  var username = 'student';
  var password = 'Password123'
  var wrongUsername = 'wrongstudent';
  var wrongPassword = 'Password456';
  
  describe('A simple login test using the Page Object Model', () => {
  it('should login successfully', () => {
    cy.visit(url);

    loginPage.login(username, password);

    cy.log(cy.url());

    cy.url().should('include', 'logged-in-successfully');
  }),

  it('should fail to login', () => {
    cy.visit(url);

    loginPage.login(wrongUsername, wrongPassword);

    cy.get('#error').should('be.visible');
  })
})