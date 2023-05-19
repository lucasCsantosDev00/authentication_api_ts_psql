# authentication_api_ts_psql

Sobre <h1>
Este projeto tem como objetivo expandir meus conhecimentos em criação e arquitetura de API's REST modernas e nas tecnologias utilizadas. O projeto trata-se de uma api onde o usuário precisa estar autenticado para acessar a rota principal.
  
Tecnologias <h1>
- Node
- Typescript
- Class-validator
- Typeorm
- Postgres
- Docker  
  
Instalação <h1>
 
git clone https://github.com/lucasCsantosDev00/authentication_api_ts_psql
 
- Dentro da pasta do projeto rodar o comando `npm install` ou `yarn install`
- Com o Postgres instalado, criar um banco de dados para a aplicação.
- Criar um arquivo .env com as variáveis necessárias como no arquivo .env.example
- Rode o comando `yarn migration: run` para criar a users no banco de dados.
- Agora basta rodar o comando `npm run dev`
  
outros comandos:
- `yarn migration:show`: Lista migrations já criadas.
- `yarn migration:create <nome>`: Cria uma nova migration, é necessário passar um nome.
- `yarn migration:run`: Roda a migration.
- `yarn migration:revert`: reverte a migration  
  
Rodando via Docker <h1>
- Em uma máquina com Docker instalado, dentro da pasta raíz do projeto rode o comando `docke-compose up`
  
Rotas da API <h1>
  
 Método    | Rota     | Parâmetros            |
 --------- | ---------| ----------------------|
 POST      | /register| name, email, password |
 POST      | /login   | email, password       |
 GET       | /        |                       |
 
  
