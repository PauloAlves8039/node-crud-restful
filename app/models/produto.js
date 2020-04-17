/**
 * @file: produto.js
 * @author: Paulo Alves
 * @description: responsável pela representação da entidade 'Produto'.
 * @version 1.0.1(16/04/2020)
 */

/**
 * @param {mongoose} mongoose - parâmetro responsável pelo uso do 'mongoose'. 
 */
var mongoose = require('mongoose')

/**
 * @param {Schema} Schema - parâmetro responsável pela declaração do esquema do mongoose. 
 */
var Schema = mongoose.Schema

/**
 * @param {ProdutoSchema} ProdutoSchema - responsável pela atribuição do esquema de produtos.
 * @param {String} nome - parâmetro responsável por definir o nome do produto. 
 * @param {Number} preco - parâmetro responsável por definir o preço do produto. 
 * @param {String} descricao - parâmetro responsável pela descrição do produto.   
 *  
 */
var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
})

module.exports = mongoose.model('Produto', ProdutoSchema)