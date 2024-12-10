describe('Verificar página de produtos e página de um produto', () => {
    it('Verificar PLP (Product Listing Page)', () => {
      cy.visit('/');  
      cy.get('div.shop-menu').contains('Products').should('have.attr', 'href', '/products').click(); 
      cy.contains('All Products').should('be.visible'); 
      
      cy.contains('View Product').eq(0).click(); 
      
      // Verifica se a URL foi alterada para a página de detalhes do produto
      cy.url().should('include', '/product_details/1');  // Verifique a URL da página do produto, ajustando conforme necessário
  
      // Verifica se a página do produto foi carregada
    
      cy.get('h2').contains('Blue Top').should('be.visible');
      cy.get('p').contains('Category: Women > Tops').should('be.visible');
      cy.get('span').contains('Rs. 500').should('be.visible');
      cy.get('p').contains('In Stock').should('be.visible');
      cy.get('p').contains('New').should('be.visible');
      cy.get('p').contains('Polo').should('be.visible');
    
    });
  
    
      
    
  });
