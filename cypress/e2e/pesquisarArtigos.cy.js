describe('Acessar página Checkmob', () => {
  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Verifica o título da página', () => {
    cy.title().should('include', 'Checkmob')
  })

  it('Realizar pesquisa por clientes e validar resultado', () => {
    cy.origin('https://intercom.help', () => {
      cy.visit('https://intercom.help/checkmob/pt-BR/')

      // Pesquisa por "Clientes"
      cy.get('#search-input').should('be.visible').type('Clientes{enter}')
      
      cy.get('div.section__content', { timeout: 10000 })
        .should('contain.text', 'Resultados da pesquisa para:')
        .and('contain.text', 'Clientes');

      cy.get('.section__search_results').should('be.visible')

      //Acessa resultado "Como cadastrar clientes pela web"
      cy.contains('Como cadastrar clientes pela web').should('be.visible').click()
      
    })
  })
})
