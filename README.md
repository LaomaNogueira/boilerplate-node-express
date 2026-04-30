# Boilerplate para TypeScript e Express

Um boilerplate robusto, escalável e pronto para produção para construir APIs REST usando Node.js, Express e TypeScript. Inclui suporte nativo para validação e transformação de dados, lint, formatação e uma configuração completa de testes.

---

## 🚀 Funcionalidades

* **Suporte a TypeScript:** *Aliases* de caminho e transpilação rápida usando `ts-node-dev`.
* **Validação e Transformação:** Suporte nativo para `class-validator` e `class-transformer`.
* **Qualidade de Código:** `ESLint` e `Prettier` pré-configurados para manter um estilo de código consistente.
* **Configuração de Testes:** Pronto para testes unitários e de integração com o `Jest`.
* **Pronto para Produção:** Comandos de build limpos e gerenciamento de variáveis de ambiente.

---

## 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão ≥ 20.0.0 recomendada)
* [npm](https://www.npmjs.com/)

---

## ⚙️ Primeiros Passos

### 1. Clone e Instale

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>

# Instalar dependências
npm install
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no exemplo:

```bash
cp .env.example .env
```

### 3. Executando o Projeto

Para o modo de desenvolvimento (com recarregamento automático):

```bash
npm run start:dev
```

Para compilar e executar em ambiente de produção:

```bash
npm run build
npm start
```

---

## 📜 Scripts Disponíveis

Os seguintes scripts estão disponíveis no seu `package.json`:

| Script                | Descrição                                                                 |
|----------------------|--------------------------------------------------------------------------|
| `npm run build`      | Compila o código TypeScript para JavaScript.                            |
| `npm run start`      | Executa o servidor compilado a partir da pasta `dist`.                  |
| `npm run start:dev`  | Executa a aplicação em modo de desenvolvimento com `ts-node-dev`.       |
| `npm run lint`       | Verifica o código por erros de lint.                                    |
| `npm run lint:fix`   | Corrige automaticamente os erros de lint corrigíveis.                   |
| `npm run format`     | Formata o código-fonte usando o Prettier.                               |
| `npm run test`       | Executa todos os testes usando o Jest.                                  |
| `npm run test:unit`  | Executa apenas os testes unitários.                                     |
| `npm run test:integ` | Executa apenas os testes de integração.                                 |
| `npm run test:cov`   | Gera um relatório de cobertura de testes.                               |
| `npm run test:watch` | Executa os testes unitários em modo observação (watch).                 |

---

## 🛠️ Tecnologias e Dependências

* **Framework:** Express (^4.18.3)
* **Validação e Transformação:** `class-validator`, `class-transformer`, `reflect-metadata`
* **Utilitários:** `axios`, `dotenv`, `http-status`
* **Desenvolvimento:** `typescript`, `ts-node-dev`, `jest`, `eslint`, `prettier`

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.