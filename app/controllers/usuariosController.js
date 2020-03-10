var Usuarios = require('../models/usuario')
module.exports = {
    // https://docs.mongodb.com/v3.0/reference/operator/query/text/
    search: function (req, res) {
        var q = req.query.q
        Usuarios.find({
            $text: {
                $search: q
            }
        }, function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error en la búsqueda'
                })
            }
            return res.json(usuarios)
        })
    },
    list: function (req, res) {
        Usuarios.find(function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error obteniendo el usuario'
                })
            }
            return res.json(usuarios)
        })
    },
    show: function (req, res) {
        var id = req.params.id
        Usuarios.findOne({
            _id: id
        }, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Se ha producido un error al obtener el usuario'
                })
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No tenemos este usuario'
                })
            }
            return res.json(usuario)
        })
    },
    create: function (req, res) {
        var usuario = new Usuarios(req.body)
        usuario.save(function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error al guardar el usuario',
                    error: err
                })
            }
            return res.status(201).json({
                message: 'saved',
                _id: usuario._id
            })
        })
    },
    update: function (req, res) {
        var id = req.params.id
        Usuarios.findOne({
            _id: id
        }, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Se ha producido un error al guardar el usuario',
                    error: err
                })
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No hemos encontrado el usuario'
                })
            }
            usuario.id = req.body.id
            usuario.nombre = req.body.nombre
            usuario.apellidos = req.body.apellidos
            usuario.dni = req.body.dni
            usuario.telefono = req.body.telefono
            usuario.email = req.body.email
            usuario.save(function (err, usuario) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error al guardar el usuario'
                    })
                }
                if (!usuario) {
                    return res.status(404).json({
                        message: 'No hemos encontrado el usuario'
                    })
                }
                return res.json(usuario)
            })
        })
    },
    remove: function (req, res) {
        var id = req.params.id
        Usuarios.findByIdAndRemove(id, function (err, usuario) {
            if (err) {
                return res.json(500, {
                    message: 'No hemos encontrado el usuario'
                })
            }
            return res.json(usuario)
        })
    }
}
