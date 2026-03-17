// Testes automatizados — Cadastro de Usuário
// Autor: João Fray
// Ferramenta: Cypress + JavaScript
// Site de prática: https://demoqa.com/automation-practice-form
// Data: Março/2026

const BASE_URL = 'https://demoqa.com/automation-practice-form'

describe('Formulário de Cadastro — DemoQA', () => {

  beforeEach(() => {
    cy.visit(BASE_URL)
  })

  // --------------------------------------------------
  // CT001 — Cadastro com dados válidos (Positivo)
  // --------------------------------------------------
  it('CT001 — deve preencher o formulário com sucesso quando os dados são válidos', () => {
    cy.get('#firstName')
      .type('João')

    cy.get('#lastName')
      .type('Fray')

    cy.get('#userEmail')
      .type('joao.fray@email.com')

    cy.get('[for="gender-radio-1"]')
      .click()

    cy.get('#userNumber')
      .type('19987654321')

    cy.get('#submit')
      .click()

    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain.text', 'Thanks for submitting the form')
  })

  // --------------------------------------------------
  // CT003 — Campos obrigatórios vazios (Negativo)
  // --------------------------------------------------
  it('CT003 — não deve enviar o formulário quando campos obrigatórios estão vazios', () => {
    cy.get('#submit')
      .click()

    cy.get('#firstName')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')
  })

  // --------------------------------------------------
  // CT004 — E-mail com formato inválido (Negativo)
  // --------------------------------------------------
  it('CT004 — deve marcar campo como inválido quando o e-mail tem formato incorreto', () => {
    cy.get('#firstName')
      .type('João')

    cy.get('#lastName')
      .type('Fray')

    cy.get('#userEmail')
      .type('emailsemarroba')

    cy.get('[for="gender-radio-1"]')
      .click()

    cy.get('#userNumber')
      .type('19987654321')

    cy.get('#submit')
      .click()

    cy.get('#userEmail')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')
  })

  // --------------------------------------------------
  // CT006 — Nome deixado em branco (Negativo)
  // --------------------------------------------------
  it('CT006 — deve marcar campo como inválido ao deixar o nome em branco', () => {
    cy.get('#firstName')
      .click()
      .clear()

    cy.get('#lastName')
      .type('Fray')

    cy.get('[for="gender-radio-1"]')
      .click()

    cy.get('#userNumber')
      .type('19987654321')

    cy.get('#submit')
      .click()

    cy.get('#firstName')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')
  })

})
