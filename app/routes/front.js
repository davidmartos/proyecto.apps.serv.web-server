var express = require('express');
var router = express.Router();
 
var index= require('../controllers/indexController.js');

router.get('/', index.index);
router.get('/libros', index.libros);
router.get('/prestamos', index.prestamos);
router.get('/login', index.login);

module.exports = router;