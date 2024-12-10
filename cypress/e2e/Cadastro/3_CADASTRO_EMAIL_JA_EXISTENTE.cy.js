describe('Sucesso - Cadastro de novo usuário', () => {
    

    it('Criar conta', () => {
        cy.visit('/');
        cy.get('div.shop-menu').contains('Login').should('have.attr', 'href', '/login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]')
        .type('Tiago')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Name')
    
        cy.get('[data-qa="signup-email"]')
        .type('tiagoteste123@gmail.com')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Email Address')
    
        cy.get('[data-qa="signup-button"]').contains('Signup').click();
    
        
        cy.contains('Email Address already exist!').should('be.visible');

        
    });

});
