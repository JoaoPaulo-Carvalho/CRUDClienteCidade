# CRUDClienteCidade

CRUD de Clientes e Cidades em Node.JS (Express) e PostgreSQL.


**Autor: João Paulo de Carvalho Araújo**

## Instruções

* A aplicação requer um banco de dados PostgreSQL e credenciais que permitam criar tabelas e realizar *queries*.

  * As credenciais do banco, bem como IP e o Banco de Dados a serem utilizados devem ser configurados no arquivo `src/config/database.js`.

* Instalar todos os módulos do Node.JS pelo comando

```
npm install
```

* Para fazer a *migration* do banco (já configurado), basta digitar:
```
npx sequelize-cli db:migrate
```

* Antes de rodar os testes é necessário popular a base com *seeds*, pelo comando:
```
npx sequelize-cli db:seed:all
```

* Para realizar os testes unitários da API:
```
npm test
```

* Para executar a aplicação sem os dados utilizados nos testes:
```
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
```

* Para executar a aplicação:

```
npm start
```

**O projeto estará rodando pelo módulo `Nodemon`, que é recomendado apenas para ambiente de desenvolvimento.**