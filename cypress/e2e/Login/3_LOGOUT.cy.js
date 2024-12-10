import { login } from '../../support/loginUtils';

describe('Teste de Logout', () => {
  it('Efetuar logout com sucesso', () => {
    login('tiagoteste123@gmail.com', '123456'); 

    // Realizando o logout
    cy.get('div.shop-menu').contains('Logout').click();
    cy.contains('Login to your account').should('be.visible'); 
  });
});