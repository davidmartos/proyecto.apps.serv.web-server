var indexController = {};

indexController.index = function(req, res){
    res.render('index',{});
};
indexController.libros = function(req, res){
    res.render('libros',{});
};

indexController.prestamos = function(req, res){
    res.render('prestamos',{});
};

indexController.login = function(req, res){
    res.render('login',{});
};

module.exports = indexController;

