var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usuarioSchema = new Schema({
    id: Number,
    nombre: String,
    apellidos: String,
    dni: String,
    telefono: String,
    email: String
})

var Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
