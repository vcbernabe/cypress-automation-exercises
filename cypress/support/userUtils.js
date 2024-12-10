import { faker } from '@faker-js/faker';

export const generateUserData = () => ({
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
});

export const createUser = (userData) => {
  cy.visit('/');
  cy.get('div.shop-menu').contains('Login').click();
  cy.contains('New User Signup!').should('be.visible');
  cy.get('[data-qa="signup-name"]').type(userData.name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
  
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type(userData.password);
  cy.get('#newsletter').check();
  
  // Data de aniversário
  cy.get('#days').select(userData.birthDay);
  cy.get('#months').select(userData.birthMonth);
  cy.get('#years').select(userData.birthYear);

  // Informações de endereço
  cy.get('#first_name').type(userData.firstName);
  cy.get('#last_name').type(userData.lastName);
  cy.get('#company').type('Any company');
  cy.get('#address1').type(userData.address);
  cy.get('#address2').type(userData.city);
  cy.get('#country').select('Canada');
  cy.get('#state').type(userData.state);
  cy.get('#city').type(userData.city);
  cy.get('#zipcode').type(userData.zipcode);
  cy.get('#mobile_number').type(userData.phone);

  cy.get('[data-qa="create-account"]').click();
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
};