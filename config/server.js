var express = require('express')
var app = express()

app.use(express.urlencoded({extended:true}))

var porta = process.env.PORT || 1234

module.exports = {app, porta}