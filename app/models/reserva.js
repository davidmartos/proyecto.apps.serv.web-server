var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reservaSchema = new Schema({
    _id: Number,
    libro: [{
        titulo: String,
        autores: String,
        isbn: String,
        ejemplares: Number,
        resumen: String
    }],
    usuario: {
        nombre: String,
        apellidos: String,
        dni: String,
        telefono: String,
        email: String
    },
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    estado: Number
})

var Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva
