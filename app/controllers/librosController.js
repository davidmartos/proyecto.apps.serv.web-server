var Libros = require('../models/libro')
module.exports = {
    // https://docs.mongodb.com/v3.0/reference/operator/query/text/
    search: function (req, res) {
        var q = req.query.q
        Libros.find({
            $text: {
                $search: q
            }
        }, function (err, libros) {
            if (err) {
                return res({
                    message: 'Error en la búsqueda'
                })
            }
            return res(libros)
        })
    },
    list: function (req, res) {
        Libros.find(function (err, libros) {
            if (err) {
                return res({
                    message: 'Error obteniendo el libro'
                })
            }
            return res(libros)
        })
    },
    show: function (req, res) {
        var id = req.params.id
        Libros.findOne({
            _id: id
        }, function (err, libro) {
            if (err) {
                return res({
                    message: 'Se ha producido un error al obtener el libro'
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
        var libro = new Libros(req.body)
        libro.save(function (err, libro) {
            if (err) {
                return res({
                    message: 'Error al guardar el libro',
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
        Libros.findOne({
            _id: id
        }, function (err, libro) {
            if (err) {
                return res({
                    message: 'Se ha producido un error al guardar el libro',
                    error: err
                })
            }
            if (!libro) {
                return res({
                    message: 'No hemos encontrado el libro'
                })
            }
            libro.autores = req.body.autores
            libro.isbn = req.body.isbn
            libro.ejemplares = req.body.ejemplares
            libro.resumen = req.body.resumen
            libro.save(function (err, libro) {
                if (err) {
                    return res({
                        message: 'Error al guardar el libro'
                    })
                }
                if (!libro) {
                    return res({
                        message: 'No hemos encontrado el libro'
                    })
                }
                return res(libro)
            })
        })
    },
    remove: function (req, res) {
        var id = req.params.id
        Libros.findByIdAndRemove(id, function (err, libro) {
            if (err) {
                return res({
                    message: 'No hemos encontrado el libro'
                })
            }
            return res(libro)
        })
    }
}
