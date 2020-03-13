var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usuarioSchema = new Schema({
    nombre: String,
    apellidos: String,
    dni: String,
    telefono: String,
    email: String,
    contraseña: String
})

var Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
