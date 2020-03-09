var mongoose = require('mongoose')
var Schema = mongoose.Schema

var libroSchema = new Schema({
    Id: Number,
    Autores: String,
    ISBN: String,
    Ejemplares: Number,
    Resumen: String
})

var Libro = mongoose.model('Libro', libroSchema)

module.exports = Libro
