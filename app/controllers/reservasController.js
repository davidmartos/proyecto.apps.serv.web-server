var Reservas = require('../models/reserva')
module.exports = {
    // https://docs.mongodb.com/v3.0/reference/operator/query/text/
    search: function (req, res) {
        var q = req.query.q
        Reservas.find({
            $text: {
                $search: q
            }
        }, function (err, reservas) {
            if (err) {
                return res({
                    message: 'Error en la búsqueda'
                })
            }
            return res(reservas)
        })
    },
    list: function (req, res) {
        Reservas.find(function (err, reservas) {
            if (err) {
                return res({
                    message: 'Error obteniendo la reserva'
                })
            }
            return res(reservas)
        })
    },
    show: function (req, res) {
        var id = req.params.id
        Reservas.findOne({
            _id: id
        }, function (err, libro) {
            if (err) {
                return res({
                    message: 'Se ha producido un error al obtener la reserva'
                })
            }
            if (!libro) {
                return res({
                    message: 'No tenemos este libro'
                })
            }
            return res(libro)
        })
    },
    create: function (req, res) {
        var libro = new Reservas(req.body)
        libro.save(function (err, libro) {
            if (err) {
                return res({
                    message: 'Error al guardar la reserva',
                    error: err
                })
            }
            return res({
                message: 'saved',
                _id: libro._id
            })
        })
    },
    update: function (req, res) {
        var id = req.params.id
        Reservas.findOne({
            _id: id
        }, function (err, libro) {
            if (err) {
                return res({
                    message: 'Se ha producido un error al guardar la reserva',
                    error: err
                })
            }
            if (!libro) {
                return res({
                    message: 'No hemos encontrado la reserva'
                })
            }
            reserva.Id = req.body.id
            reserva.Libro = req.body.libro
            reserva.Usuario = req.body.usuario
            reserva.FechaPrestamo = req.body.fechaprestamo
            reserva.FechaDevolucion = req.body.fechadevolucion
            reserva.Estado = req.body.estado
            reserva.save(function (err, libro) {
                if (err) {
                    return res({
                        message: 'Error al guardar la reserva'
                    })
                }
                if (!libro) {
                    return res({
                        message: 'No hemos encontrado la reserva'
                    })
                }
                return res(libro)
            })
        })
    },
    remove: function (req, res) {
        var id = req.params.id
        Reservas.findByIdAndRemove(id, function (err, libro) {
            if (err) {
                return res({
                    message: 'No hemos encontrado la reserva'
                })
            }
            return res(libro)
        })
    }
}
