# QA — Testes de Cadastro de Usuário

Projeto de estudo com casos de teste **manual** e **automatizado** para o fluxo de cadastro de usuário em uma aplicação web.

## Objetivo

Demonstrar habilidades em Quality Assurance (QA) com cobertura de cenários positivos, negativos e de borda para o formulário de cadastro.

---

## Estrutura do repositório

```
qa-cadastro-usuario/
├── manual/
│   └── plano-de-testes-manual.md   # Casos de teste manuais documentados
├── automatizado/
│   └── cypress/
│       └── e2e/
│           └── cadastro.cy.js      # Testes automatizados com Cypress
├── README.md
```

---

## Tecnologias

- **Testes manuais:** documentação em Markdown
- **Testes automatizados:** [Cypress](https://www.cypress.io/) + JavaScript

---

## Como executar os testes automatizados

### Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- npm instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/qa-cadastro-usuario.git

# Entre na pasta
cd qa-cadastro-usuario/automatizado

# Instale as dependências
npm install
```

### Executar os testes

```bash
# Modo interativo (abre o Cypress)
npx cypress open

# Modo headless (terminal)
npx cypress run
```

---

## Casos de teste cobertos

### Manual
| ID | Cenário | Tipo |
|---|---|---|
| CT001 | Cadastro com dados válidos | Positivo |
| CT002 | Email já cadastrado | Negativo |
| CT003 | Campo obrigatório vazio | Negativo |
| CT004 | Email com formato inválido | Negativo |
| CT005 | Senha abaixo do mínimo | Negativo |
| CT006 | Senha e confirmação diferentes | Negativo |
| CT007 | Campos com espaços em branco | Borda |
| CT008 | Nome com caracteres especiais | Borda |

### Automatizado (Cypress)
| ID | Cenário | Tipo |
|---|---|---|
| CT001 | Cadastro com dados válidos | Positivo |
| CT003 | Campo obrigatório vazio | Negativo |
| CT004 | Email com formato inválido | Negativo |
| CT006 | Senha e confirmação diferentes | Negativo |

---

## Autor

**João Fray**
[LinkedIn](https://www.linkedin.com/in/joão-fray) • [GitHub](https://github.com/SEU_USUARIO)
