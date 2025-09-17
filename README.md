
# MiniLoja 🛒 — Sistema Web de E-commerce

## Descrição do Projeto

MiniLoja é uma aplicação web desenvolvida durante o curso **Desenvolvedor Full Stack Júnior** oferecido pelo +PraTi. O projeto tem como objetivo **praticar diferentes técnicas de estilização** (CSS global, CSS com módulos, Styled Components e TailwindCSS).


## Status do Projeto

<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=BLUE&style=for-the-badge"/>

## :man_technologist: Tecnologias Utilizadas

- React
- Vite
- TypeScript
- Node.js
- TailwindCSS
- CSS
- Styled Components
- Express
- Prisma (ORM)
- PostgreSQL
- Docker
- VS Code
- Git & GitHub

## :hammer: Funcionalidades

- Cadastro de usuários — permite criar uma conta na aplicação de forma rápida.
- Login — autentica o usuário para acessar áreas privadas da aplicação.
- Gerenciamento do carrinho — permite adicionar, visualizar e remover produtos do carrinho.
- Exclusão de conta — possibilita ao usuário remover sua conta da aplicação.
- Logout — encerra a sessão do usuário.

## :rocket: Como Rodar o Projeto


### 1️⃣ Pré-requisitos

- Node.js instalado ([Download](https://nodejs.org))
- Git instalado
- PostgreSQL

### 2️⃣ Clone este repositório

```bash
git clone git@github.com:GerlandioBernardo/MiniLoja.git
cd MiniLoja
```

### 3️⃣ Instale as dependências do backend e configure o ambiente

```bash
cd backend
npm install
```
#### Configure o arquivo .env

Na pasta backend, crie um arquivo chamado .env e adicione a URL de conexão com o PostgreSQL:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco?schema=public"
```
Substitua **usuario**, **senha** e **nomedobanco** pelos dados do seu PostgreSQL.

#### Execute o backend

```bash
npm run dev
```

### 4️⃣ Instale as dependências do frontend e execute

Abra outro terminal e execute:

```bash
cd ../frontend
npm install
npm run dev
```

> O frontend estará disponível em `http://localhost:5173`
