/**
 * @file: server.js
 * @author: Paulo Alves
 * @description: responsável pelas configurações do servidor.
 * @version 1.0.1(16/04/2020)
 */

/**
 * @param {e} express - parâmetro responsável pela adição do 'express'. 
 */
var express = require('express')

/**
 * @param {express} app - parâmetro responsável pela atribuição de chamada do express. 
 */
var app = express()

/**
 * @param {bodyParser} bodyParser - parâmetro responsável pela adição do 'body-parser'. 
 */
var bodyParser = require('body-parser')

/**
 * Configurando a variável app para uso do 'body-parser'
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * @param {string} port - parâmetro responsável por difinir a porta de execução da api. 
 */
var port = process.env.port || 8000

/**
 *  @param {Router} router - parâmetro responsável pela definição de rota. 
 */
var router = express.Router()

/**
 * Função responsável por realizar teste inicial de execução da api
 * 
 * @param req - responsável por executar requisão.
 * @param res - responsável por executar resposta.
 */
router.get('/', function(req, res){
    res.json({message: 'Bem vindo(a) a nossa loja!'})
})

/**
 * @param use - define o uso padrão das rotas. 
 */
app.use('/api', router)

/**
 * @param listen - define a inicialização da aplicação.  
 */
app.listen(port)
console.log('Iniciando a aplicação na porta: ' + port)