<h1 align="center">:rocket: node crud restful</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/npm/v/6.14.2"><img src="https://img.shields.io/badge/Npm-v6.14.2-%2300BFFF"></a>
  <a href="https://www.postman.com/"><img src="https://img.shields.io/badge/Postman-v7.22.1-orange"></a>
  <a href="https://nodejs.org/dist/latest-v12.x/docs/api/n"><img src="https://img.shields.io/badge/NodeJS-v12.16.2-green"></a>
  <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/Express-v4.17.1-blue"></a>
  <a href="https://docs.mongodb.com/manual/release-notes/3.4/"><img src="https://img.shields.io/badge/MongoDb-v3.4.10-success"></a>
</p>

## :computer: Projeto
Repositório de uma aplicação para fins acadêmicos utilizando um CRUD básico com Node.Js, Express.js e MongoDb.  
Código fonte do projeto foi baseado no tutorial 
[CRUD API RESTful com: Node + Express + MongoDb](https://www.youtube.com/watch?v=qwgDzi8TGco&list=PLb2HQ45KP0WstF2TXsreWRv-WUr5tqzy1).

## :wrench: Recursos Utilizados
- Visual Studio Code v1.44.1
- Postman v7.22.1
- Npm v6.14.2
- NodeJs v12.16.2
- Express v4.17.1
- MongoDb v3.4.10

## :floppy_disk: Instalação
Baixar repositório ```git clone https://github.com/PauloAlves8039/node-crud-restful.git```
- Abra a pasta ```node-crud-restful``` no prompt de comando do Windows.
- Execute ```npm install``` para instalar os módulos necessários do NodeJs.
- Execute ```nodemon server``` para iniciar a aplicação em ```localhost:8000```.

## :pencil2: Informações para uso do Postman
O Postman pode ser usado direto no navegador google chome [Download](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

 ROTAS                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/produtos             |       GET         | Selecionar Todos      | 
/api/produtos             |       POST        | Criar Produto         | 
/api/produtos/:produto_id |       GET         | Selecionar Por Id     | 
/api/produtos/:produto_id |       PUT         | Atualizar Por Id      |    
/api/produtos/:produto_id |       DELETE      | Excluir Por Id        |

## Author
:computer: [Paulo Alves](https://github.com/PauloAlves8039)
