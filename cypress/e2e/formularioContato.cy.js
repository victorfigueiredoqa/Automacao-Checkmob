describe('Testar formulário de contato', () => {
    beforeEach(() => {
      cy.acessarPagina()
    })
  
    it('Verifica o título da página', () => {
      cy.title().should('include', 'Checkmob')
    })
  
    it('Preencher todos os campos corretamente', () => {
        // Acessar formulário de contato e validar página esperada
        cy.contains('Contato').click({force: true});
        cy.contains('Como podemos ajudar?').should('be.visible')
        
        //Preencher todos os campos corretamente
        cy.preencherFormularioContato();
    })

    it('Validar campos obrigatórios', () => {
        // Acessar formulário de contato e validar página esperada
        cy.contains('Contato').click({force: true});
        cy.contains('Como podemos ajudar?').should('be.visible')

        // Validação dos campos obrigatórios
        cy.validarCamposObrigatorios();
    })
  })
  