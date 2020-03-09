var Libros = require('../models/Libro')
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
                return res.status(500).json({
                    message: 'Error en la búsqueda'
                })
            }
            return res.json(libros)
        })
    },
    list: function (req, res) {
        Libros.find(function (err, libros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error obteniendo el libro'
                })
            }
            return res.json(libros)
        })
    },
    show: function (req, res) {
        var id = req.params.id
        Libros.findOne({
            _id: id
        }, function (err, libro) {
            if (err) {
                return res.status(500).json({
                    message: 'Se ha producido un error al obtener el libro'
                })
            }
            if (!libro) {
                return res.status(404).json({
                    message: 'No tenemos este libro'
                })
            }
            return res.json(libro)
        })
    },
    create: function (req, res) {
        var libro = new Libros(req.body)
        libro.save(function (err, libro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error al guardar el libro',
                    error: err
                })
            }
            return res.status(201).json({
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
                return res.status(500).json({
                    message: 'Se ha producido un error al guardar el libro',
                    error: err
                })
            }
            if (!libro) {
                return res.status(404).json({
                    message: 'No hemos encontrado el libro'
                })
            }
            libro.Id = req.body.id
            libro.Autores = req.body.autores
            libro.ISBN = req.body.isbn
            libro.Ejemplares = req.body.ejemplares
            libro.Resumen = req.body.resumen
            libro.save(function (err, libro) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error al guardar el libro'
                    })
                }
                if (!libro) {
                    return res.status(404).json({
                        message: 'No hemos encontrado el libro'
                    })
                }
                return res.json(libro)
            })
        })
    },
    remove: function (req, res) {
        var id = req.params.id
        Libros.findByIdAndRemove(id, function (err, libro) {
            if (err) {
                return res.json(500, {
                    message: 'No hemos encontrado el libro'
                })
            }
            return res.json(libro)
        })
    }
}
