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
 * @param {mongoose} mongoose - parâmetro responsável pela adição do 'mongoose'. 
 */
var mongoose = require('mongoose')

/**
 * @param {Produto} Produto - parâmetro responsável pela adição da entidade 'produto'. 
 */
var Produto = require('./app/models/produto')

/**
 * @param connect - parâmetro responsável pela conexão com o banco de dados local 'mongodb'
 */
mongoose.connect('mongodb://localhost:27017/node-crud-api', { useNewUrlParser: true, useUnifiedTopology: true })

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
 *  @param {Router} router - parâmetro responsável pela definição das rotas. 
 */
var router = express.Router()

/**
 * Middleware responsável sinalizar através de mensagem o uso das requisões da api. 
 */
router.use(function(req, res, next){
    console.log('Requisição em execução!')
    next()    
})

/**
 * Função responsável por realizar teste inicial de execução da api.
 * 
 * @param req - responsável por executar requisão.
 * @param res - responsável por executar resposta.
 */
router.get('/', function(req, res){
    res.json({message: 'Bem vindo(a) a nossa loja!'})
})

/**
 * @param route - parâmetro responsável definir as rotas terminadas com '/produtos' (GET ALL & POST).
 */
router.route('/produtos')

/**
 * @function post - responsável por cadastrar produto. 
 * @example - acessar rota em: POST http://localhost:8000/api/produtos
 */
.post(function(req, res){
    var produto = new Produto()

    produto.nome = req.body.nome
    produto.preco = req.body.preco
    produto.descricao = req.body.descricao

    produto.save(function(error){
        if(error){
            res.send('Erro ao salvar o produto: ' + error)
        }else{
            res.json({ message: 'Produto cadastrado com sucesso!' })
        }
    })
})

/**
 * @function get - responsável por selecionar todos os produtos. 
 * @example - acessar rota em: GET http://localhost:8000/api/produtos
 */
.get(function(req, res){
    Produto.find(function(error, produtos){
        if(error){
            res.send('Erro ao tentar selecionar produtos: ' + error)
        }else{
            res.json(produtos)
        }
    })
})

/**
 * @param route - parâmetro responsável definir as rotas terminadas com '/produtos/:produto_id' (GET, PUT & DELETE: id).
 */
router.route('/produtos/:produto_id')

/**
 * @function get - responsável por selecionar determinado produto por id. 
 * @example - acessar rota em: GET http://localhost:8000/api/produtos/:produto_id
 */
.get(function (req, res){
    Produto.findById(req.params.produto_id, function(error, produto){
        if(error){
            res.send('Erro ao selecionar produto por id: ' + error)
        }else{
            res.json(produto)
        }
    })
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