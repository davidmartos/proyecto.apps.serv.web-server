var libroController = require('../controllers/librosController')
var reservaController = require('../controllers/reservasController')

var indexController = {};

indexController.index = function(req, res){
    res.render('index',{});
};
indexController.libros = function(req, res){
    libroController.list(req, res2 => {
        res.render('libros', {books: res2});
    });
};

indexController.prestamos = function(req, res){
    reservaController.list(req, res2 => {
        res.render('prestamos', {reservas: res2});
    });
};

indexController.login = function(req, res){
    res.render('login',{});
};

module.exports = indexController;

