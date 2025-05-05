Cypress.Commands.add('acessarPagina', () => {
    cy.visit('/')
})

// Comando para preencher os campos do formulário
Cypress.Commands.add('preencherFormularioContato', () => {
    cy.get('#firstname-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('Víctor')
    cy.get('#lastname-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('Figueiredo')
    cy.get('#email-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('victorfernando.bsi@gmail.com')
    cy.get('#company-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('Meu futuro emprego')
    cy.get('#phone-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('38 999706879')
    cy.get('#assunto_contato-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').select('Suporte')
    cy.get('#message-b40d7ad9-6959-4d0c-84fa-808a2be67fb9').type('Estou apenas automatizando o formulário de ajuda da Checkmob!')

    cy.get('#LEGAL_CONSENT\\.subscription_type_53786673-b40d7ad9-6959-4d0c-84fa-808a2be67fb9', { timeout: 10000 })
        .click({ force: true });
    cy.get('#LEGAL_CONSENT\\.subscription_type_39630737-b40d7ad9-6959-4d0c-84fa-808a2be67fb9')
        .click({ force: true })
})

