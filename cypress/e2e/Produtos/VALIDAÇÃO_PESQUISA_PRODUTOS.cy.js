describe('Validação pesquisa produto', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('div.shop-menu').contains('Products').should('have.attr', 'href', '/products').click(); 
    cy.contains('All Products').should('be.visible'); 
    
});
    
    it('Pesquisa "T-Shirt', () => {
      

      cy.get('#search_product')
      .type('T-shirt')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search Product');

      cy.get('#submit_search').should('be.visible').click();

      cy.get('h2.text-center').contains('Searched Products');

      cy.get('.features_items .productinfo p').each(($el) => {
        const productName = $el.text();
        expect(productName).to.include('T-Shirt');
      });

    
    }); 
    
    it('Pesquisa "Polo"', () => {
       

      cy.get('#search_product')
      .type('Polo')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search Product');

      cy.get('#submit_search').should('be.visible').click();

      cy.get('h2.text-center').contains('Searched Products');

      cy.get('.features_items .productinfo p').each(($el) => {
        const productName = $el.text();
        expect(productName).to.include('Polo');
      });

    }); 

    it('Pesquisa "Jeans"', () => {
       

      cy.get('#search_product')
      .type('Jeans')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search Product');

      cy.get('#submit_search').should('be.visible').click();

      cy.get('h2.text-center').contains('Searched Products');

      cy.get('.features_items .productinfo p').each(($el) => {
        const productName = $el.text();
        expect(productName).to.include('Jeans');
      });

    }); 


    it('Pesquisa "Dress"', () => {
       
      cy.get('#search_product')
      .type('Dress')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search Product');

      cy.get('#submit_search').should('be.visible').click();

      cy.get('h2.text-center').contains('Searched Products');

      cy.get('.features_items .productinfo p').each(($el) => {
        const productName = $el.text();
      
        // Lista de exceções: produtos que são vestidos, mas não contêm "Dress" no nome
        const exceptionProducts = ['Sleeves Top and Short - Blue & Pink', 'Sleeveless Unicorn Patch Gown - Pink', ]; // Substitua pelo nome real do item
        
        if (!productName.includes('Dress') && !exceptionProducts.includes(productName)) {
          // Falha apenas se não for uma exceção e não contiver "Dress"
          expect(productName).to.include('Dress', `Produto inesperado encontrado: ${productName}`);
        } else {
          cy.log(`Produto aceito: ${productName}`);
        }
      
      }); 

    }); 

 });
