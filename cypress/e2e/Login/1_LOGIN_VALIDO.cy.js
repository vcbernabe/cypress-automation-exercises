describe('Login Inválido', () => {
    it('Login válido', () => {
        cy.visit('/');
        cy.get('div.shop-menu').contains('Login').should('have.attr', 'href', '/login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]')
        .type('tiagoteste123@gmail.com')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Email Address');
    
        cy.get('[data-qa="login-password"]')
        .type('123456')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Password');
    
    cy.get('[data-qa="login-button"]').contains('Login').click();
    
    });
});