import { generateUserData, createUser } from '../../support/userUtils';

describe('Teste de Logout', () => {
  let userData;

  before(() => {
    userData = generateUserData(); // Gerar dados do usuário
    createUser(userData);         // Criar conta do usuário
  });

  it('Efetuar logout com sucesso', () => {
    cy.get('div.shop-menu').contains('Logout').click(); // Pressionar logout
    cy.contains('Login to your account').should('be.visible'); // Verificar página de login
  });

  
});