var mongoose = require('mongoose')
var Schema = mongoose.Schema

var libroSchema = new Schema({
    id: Number,
    titulo: String,
    autores: String,
    isbn: String,
    ejemplares: Number,
    resumen: String
})

var Libro = mongoose.model('libro', libroSchema)

module.exports = Libro
