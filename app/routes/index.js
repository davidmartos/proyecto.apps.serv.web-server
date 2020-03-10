var router = require('express').Router()
var libros = require('./libros')
var reservas = require('./reservas')
var usuarios = require('./usuarios')

router.use('/libros', libros)
router.use('/reservas', reservas)
router.use('/usuarios', usuarios)

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'Estás conectado a nuestra API'
    })
})

module.exports = router
