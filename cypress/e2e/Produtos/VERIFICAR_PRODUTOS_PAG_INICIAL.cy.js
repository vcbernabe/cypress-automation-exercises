describe('Verificar produtos de compras na página inicial', () => {
  
  beforeEach(() => {
    cy.visit('/'); 
  
  });
  it('1 - Acessando a página Automation Exercise', () => {
    
    cy.get('h1').contains('Automation');
    cy.get('.features_items').should('be.visible');
  });

  it('2 - Verificando itens de compras', () => {
    
    cy.get('.features_items').should('be.visible');
    
    // Verificar o primeiro, o último e o terceiro item da lista
    cy.get('.features_items').children().first().should('be.visible');
    cy.get('.features_items').children().last().should('be.visible');
    cy.get('.features_items').children().eq(2).should('be.visible');

    // Verificar um produto específico com id '2'
    cy.get('[data-product-id="2"]').should('be.visible');
  });

  
});