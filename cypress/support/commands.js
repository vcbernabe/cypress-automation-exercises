Cypress.Commands.add('logout', () => {
    cy.get('div.shop-menu').contains('Logout').click();
    cy.contains('Login to your account').should('be.visible');
  });