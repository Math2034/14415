var mongoose = require('mongoose')

var conexao = ()=>{
     var caminho = mongoose.connect('mongodb+srv://depoimento:280304ma@cluster0.tfqrg.mongodb.net/Depoimentos?retryWrites=true&w=majority')
}

var schema = mongoose.Schema

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    cargo:String
})

var documentos = mongoose.model('depoimentos',depoimentos)

module.exports = {conexao, documentos}