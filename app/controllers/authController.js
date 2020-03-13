var mongoose = require('mongoose');
var Usuarios = require('../models/usuario')
var service = require('../services/service');

exports.emailLogin = function(req, res) {
    Usuarios.findOne({email: req.body.email.toLowerCase()}, function(err, usuario) {
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta
        return res
            .status(200)
            .send({token: service.createToken(usuario)});
    });
};