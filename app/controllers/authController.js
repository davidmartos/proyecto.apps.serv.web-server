var mongoose = require('mongoose');
var Usuarios = require('../models/usuario')
var service = require('../services/service');

exports.emailLogin = function(req, res) {
    Usuarios.findOne({
            email: req.body.email.toLowerCase()
        }, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Se ha producido un error al obtener el usuario'
                })
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'Usuario no existe'
                })
            }
            return res.json(usuario)
        })
};