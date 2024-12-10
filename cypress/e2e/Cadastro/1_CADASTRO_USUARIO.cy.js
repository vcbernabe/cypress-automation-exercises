import { faker } from '@faker-js/faker';

describe('Sucesso - Cadastro de novo usuário', () => {
    
    let userData;

    beforeEach(() => {
        // Gerar dados falsos antes de cada teste
          userData = {
          name: faker.person.fullName(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          birthDay: '10',
          birthMonth: '5',
          birthYear: '1988',
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipcode: faker.location.zipCode(),
          phone: faker.phone.number('+1-##########'),
        };

        cy.visit('/');
        
    });

    it('Criar conta', () => {
        cy.visit('/');
        cy.get('div.shop-menu').contains('Login').should('have.attr', 'href', '/login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]')
        .type(userData.name)
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Name')
    
        cy.get('[data-qa="signup-email"]')
        .type(userData.email)
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Email Address')
    
        cy.get('[data-qa="signup-button"]').contains('Signup').click();
    
        cy.get('#id_gender1').check().should('be.checked');
    
        cy.get('[data-qa="password"]')
        .should('be.visible') 
        .and('have.attr', 'type', 'password') 
        .type(userData.password) 
        .should('be.visible'); 
    
        cy.get('#newsletter').check().should('be.checked');
    
        //Data de aniversário

       cy.get('#days').select(userData.birthDay).should('have.value', userData.birthDay);
       cy.get('#months').select(userData.birthMonth).should('have.value', userData.birthMonth); 
       cy.get('#years').select(userData.birthYear).should('have.value', userData.birthYear);
    
        //Informação de endereço

        cy.get('#first_name')
        .type(userData.firstName)
        .should('be.visible');
    
        cy.get('#last_name')
        .type(userData.lastName)
        .should('be.visible');
    
        cy.get('#company')
        .type('Any company')
        .should('be.visible');
    
        cy.get('#address1')
        .type(userData.address)
        .should('be.visible');
    
        cy.get('#address2')
        .type(userData.city)
        .should('be.visible');
    
        cy.get('#country').select('Canada').should('have.value', 'Canada');
    
        cy.get('#state')
        .type(userData.state)
        .should('be.visible');
    
        cy.get('#city')
        .type(userData.city)
        .should('be.visible');
    
        cy.get('#zipcode')
        .type(userData.zipcode)
        .should('be.visible');
    
        cy.get('#mobile_number')
        .type(userData.phone)
        .should('be.visible');
    
        cy.get('[data-qa="create-account"]')
        .should('contain', 'Create Account')
        .and('be.visible')
        .click();
    
        cy.contains('Account Created!').should('be.visible');

        cy.get('[data-qa="continue-button"]')
        .should('contain', 'Continue')
        .and('be.visible')
        .click();

        cy.get('div.shop-menu').contains('Delete Account').should('have.attr', 'href', '/delete_account').click();
        cy.contains('Account Deleted!').should('be.visible')
    });


});