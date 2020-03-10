var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reservaSchema = new Schema({
    id: Number,
    libro: {
        type: Schema.Types.ObjectId,
        ref: 'Libro'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    estado: Number
})

var Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva
