describe('Adicionar produtos no carrinho e verificar', () => {

  beforeEach(() => {
    // Visita a página inicial somente no primeiro teste ou se necessário
    cy.visit('/');
  });

  it('Adicionar produtos 1 e 2 ao carrinho e verificar no carrinho', () => {

    // Acessa a página de produtos
    cy.get('div.shop-menu').contains('Products').should('have.attr', 'href', '/products').click();

    // Adicionar produto 1
    cy.get('[data-product-id="1"]').contains('Add to cart').click();
    cy.get('#cartModal').should('contain', 'Added').and('be.visible');
    cy.get('button.close-modal').should('be.visible').click();

    // Adicionar produto 2
    cy.get('[data-product-id="2"]').contains('Add to cart').click();
    cy.get('#cartModal').should('contain', 'Added').and('be.visible');
    cy.get('button.close-modal').should('be.visible').click();

    // Acessar a página do carrinho
    cy.get('div.shop-menu').contains('Cart').should('have.attr', 'href', '/view_cart').click();

    // Espera para garantir que o carrinho carregue
    cy.wait(1000); // Ajuste o tempo conforme necessário

    // Verificar os produtos no carrinho
    cy.get('#cart_info_table').within(() => {
      // Verifica se o produto 1 está presente
      cy.get('tr#product-1 .cart_description h4 a').should('contain', 'Blue Top');
      // Verifica se o produto 2 está presente
      cy.get('tr#product-2 .cart_description h4 a').should('contain', 'Men Tshirt');
      // Verifica se o preço do produto 1 está presente
      cy.get('tr#product-1 .cart_price p').should('contain', 'Rs. 500');
      // Verifica se o preço do produto 2 está presente
      cy.get('tr#product-2 .cart_price p').should('contain', 'Rs. 400');
    });

  });

});