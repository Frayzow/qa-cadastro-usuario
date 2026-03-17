# Plano de Testes Manual — Cadastro de Usuário

**Projeto:** Sistema Web — Formulário de Cadastro  
**Autor:** João Fray  
**Data:** Março/2026  
**Versão:** 1.0  

---

## 1. Objetivo

Validar o comportamento do formulário de cadastro de usuário, cobrindo cenários positivos, negativos e de borda para garantir a qualidade da funcionalidade.

---

## 2. Escopo

**Funcionalidade testada:** Formulário de cadastro de usuário  
**Campos do formulário:**
- Nome completo
- E-mail
- Senha
- Confirmação de senha
- Botão "Cadastrar"

**Fora do escopo:** integração com e-mail de confirmação, fluxo de login pós-cadastro.

---

## 3. Critérios de aceite

- O usuário deve conseguir se cadastrar com dados válidos.
- O sistema deve exibir mensagens de erro claras para dados inválidos.
- Não deve ser possível cadastrar dois usuários com o mesmo e-mail.
- A senha deve ter no mínimo 8 caracteres.
- Senha e confirmação de senha devem ser iguais.

---

## 4. Casos de Teste

---

### CT001 — Cadastro com dados válidos

| Campo          | Valor |
|                |       |
| **ID**         | CT001 |
| **Título**     | Cadastro com dados válidos |
| **Tipo**       | Positivo |
| **Prioridade** | Alta |

**Pré-condição:** O usuário não possui cadastro com o e-mail informado.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "Nome completo" com `João Fray`
3. Preencher o campo "E-mail" com `joao.fray@email.com`
4. Preencher o campo "Senha" com `Senha@123`
5. Preencher o campo "Confirmação de senha" com `Senha@123`
6. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema exibe mensagem de sucesso e redireciona o usuário para a tela inicial ou de boas-vindas.

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT002 — Cadastro com e-mail já existente

| Campo | Valor |
|---|---|
| **ID** | CT002 |
| **Título** | E-mail já cadastrado |
| **Tipo** | Negativo |
| **Prioridade** | Alta |

**Pré-condição:** Já existe um cadastro com o e-mail `joao.fray@email.com`.

**Passos:**
1. Acessar a página de cadastro
2. Preencher todos os campos com dados válidos
3. Informar o e-mail `joao.fray@email.com` (já cadastrado)
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema exibe a mensagem de erro: _"Este e-mail já está cadastrado."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT003 — Campo obrigatório vazio

| Campo | Valor |
|---|---|
| **ID** | CT003 |
| **Título** | Campo obrigatório deixado em branco |
| **Tipo** | Negativo |
| **Prioridade** | Alta |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Deixar o campo "Nome completo" em branco
3. Preencher os demais campos corretamente
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema não permite o envio e exibe a mensagem: _"O campo Nome completo é obrigatório."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT004 — E-mail com formato inválido

| Campo | Valor |
|---|---|
| **ID** | CT004 |
| **Título** | Formato de e-mail inválido |
| **Tipo** | Negativo |
| **Prioridade** | Média |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "E-mail" com `joaofray.com` (sem @)
3. Preencher os demais campos corretamente
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema exibe a mensagem: _"Informe um e-mail válido."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT005 — Senha abaixo do mínimo de caracteres

| Campo | Valor |
|---|---|
| **ID** | CT005 |
| **Título** | Senha com menos de 8 caracteres |
| **Tipo** | Negativo |
| **Prioridade** | Alta |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "Senha" com `123` (menos de 8 caracteres)
3. Preencher os demais campos corretamente
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema exibe a mensagem: _"A senha deve ter no mínimo 8 caracteres."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT006 — Senha e confirmação diferentes

| Campo | Valor |
|---|---|
| **ID** | CT006 |
| **Título** | Senha diferente da confirmação |
| **Tipo** | Negativo |
| **Prioridade** | Alta |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "Senha" com `Senha@123`
3. Preencher o campo "Confirmação de senha" com `Senha@456`
4. Preencher os demais campos corretamente
5. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema exibe a mensagem: _"As senhas não coincidem."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT007 — Campos preenchidos apenas com espaços

| Campo | Valor |
|---|---|
| **ID** | CT007 |
| **Título** | Campos com espaços em branco |
| **Tipo** | Borda |
| **Prioridade** | Média |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "Nome completo" com `   ` (apenas espaços)
3. Preencher os demais campos corretamente
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema trata o campo como vazio e exibe: _"O campo Nome completo é obrigatório."_

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

### CT008 — Nome com caracteres especiais

| Campo | Valor |
|---|---|
| **ID** | CT008 |
| **Título** | Nome com caracteres especiais e acentos |
| **Tipo** | Borda |
| **Prioridade** | Baixa |

**Pré-condição:** Nenhuma.

**Passos:**
1. Acessar a página de cadastro
2. Preencher o campo "Nome completo" com `José D'Ávila Ção`
3. Preencher os demais campos corretamente
4. Clicar no botão "Cadastrar"

**Resultado esperado:** O sistema aceita o nome sem erros e conclui o cadastro normalmente.

**Resultado obtido:** _(preencher durante a execução)_  
**Status:** ⬜ Não executado | ✅ Passou | ❌ Falhou

---

## 5. Resumo de execução

| Total de casos | Passou | Falhou | Não executado |
|---|---|---|---|
| 8 | — | — | 8 |

---

## 6. Observações

- Preencher a coluna "Resultado obtido" e "Status" durante a execução real dos testes.
- Registrar prints de evidência em caso de falha.
- Abrir bug report para cada caso com status ❌.
