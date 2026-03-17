// Testes automatizados — Cadastro de Usuário
// Autor: João Fray
// Ferramenta: Cypress + JavaScript
// Data: Março/2026

// IMPORTANTE: Substitua a URL abaixo pela URL real do sistema que você está testando
const BASE_URL = 'https://sua-aplicacao.com/cadastro'

// Seletores dos campos do formulário
// Adapte os seletores conforme o HTML da aplicação real
const SELECTORS = {
  nome:             '[data-cy="input-nome"]',
  email:            '[data-cy="input-email"]',
  senha:            '[data-cy="input-senha"]',
  confirmacaoSenha: '[data-cy="input-confirmacao-senha"]',
  btnCadastrar:     '[data-cy="btn-cadastrar"]',
  mensagemSucesso:  '[data-cy="msg-sucesso"]',
  mensagemErro:     '[data-cy="msg-erro"]',
}

describe('Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit(BASE_URL)
  })

  // --------------------------------------------------
  // CT001 — Cadastro com dados válidos (Positivo)
  // --------------------------------------------------
  it('CT001 — deve realizar o cadastro com sucesso quando os dados são válidos', () => {
    cy.get(SELECTORS.nome)
      .type('João Fray')

    cy.get(SELECTORS.email)
      .type('joao.fray.teste@email.com')

    cy.get(SELECTORS.senha)
      .type('Senha@123')

    cy.get(SELECTORS.confirmacaoSenha)
      .type('Senha@123')

    cy.get(SELECTORS.btnCadastrar)
      .click()

    cy.get(SELECTORS.mensagemSucesso)
      .should('be.visible')
      .and('contain.text', 'Cadastro realizado com sucesso')
  })

  // --------------------------------------------------
  // CT003 — Campo obrigatório vazio (Negativo)
  // --------------------------------------------------
  it('CT003 — deve exibir erro quando campo obrigatório está vazio', () => {
    // Deixa o campo Nome em branco e preenche o resto
    cy.get(SELECTORS.email)
      .type('joao.fray.teste@email.com')

    cy.get(SELECTORS.senha)
      .type('Senha@123')

    cy.get(SELECTORS.confirmacaoSenha)
      .type('Senha@123')

    cy.get(SELECTORS.btnCadastrar)
      .click()

    cy.get(SELECTORS.mensagemErro)
      .should('be.visible')
      .and('contain.text', 'obrigatório')
  })

  // --------------------------------------------------
  // CT004 — E-mail com formato inválido (Negativo)
  // --------------------------------------------------
  it('CT004 — deve exibir erro quando o e-mail tem formato inválido', () => {
    cy.get(SELECTORS.nome)
      .type('João Fray')

    cy.get(SELECTORS.email)
      .type('emailsemarrobapontocom') // formato inválido

    cy.get(SELECTORS.senha)
      .type('Senha@123')

    cy.get(SELECTORS.confirmacaoSenha)
      .type('Senha@123')

    cy.get(SELECTORS.btnCadastrar)
      .click()

    cy.get(SELECTORS.mensagemErro)
      .should('be.visible')
      .and('contain.text', 'e-mail válido')
  })

  // --------------------------------------------------
  // CT006 — Senha diferente da confirmação (Negativo)
  // --------------------------------------------------
  it('CT006 — deve exibir erro quando senha e confirmação são diferentes', () => {
    cy.get(SELECTORS.nome)
      .type('João Fray')

    cy.get(SELECTORS.email)
      .type('joao.fray.teste@email.com')

    cy.get(SELECTORS.senha)
      .type('Senha@123')

    cy.get(SELECTORS.confirmacaoSenha)
      .type('Senha@456') // diferente da senha

    cy.get(SELECTORS.btnCadastrar)
      .click()

    cy.get(SELECTORS.mensagemErro)
      .should('be.visible')
      .and('contain.text', 'senhas não coincidem')
  })

})
