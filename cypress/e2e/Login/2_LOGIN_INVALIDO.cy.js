describe('Login Inválido', () => {
  before(() => {
    cy.visit('/'); 
  });
      it('Login inválido', () => {
        cy.visit('/');
        cy.get('div.shop-menu').contains('Login').should('have.attr', 'href', '/login').click();
    
        cy.contains('Login to your account').should('be.visible');
    
       cy.get('[data-qa="login-email"]')
          .type('teste@gmail.com')
          .should('be.visible')
          .and('have.attr', 'placeholder', 'Email Address');
    
        cy.contains('Login to your account').should('be.visible');
    
        cy.get('[data-qa="login-password"]').type('1234').should('have.value', '1234');

        cy.get('[data-qa="login-button"]').as('btnlogin').then(($button) => {
            expect($button).to.have.text('Login');
            expect($button).contain('Login');
            expect($button).to.be.visible;
            expect($button).to.have.attr('type', 'submit');
            expect($button).to.have.class('btn');
      
            cy.wrap($button).click();
      
            cy.contains('Your email or password is incorrect!').should('be.visible');
         
        });
      
      });

    });