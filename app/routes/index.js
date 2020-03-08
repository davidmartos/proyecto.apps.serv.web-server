var router = require('express').Router()
var libros = require('./libros')

router.use('/libros', libros)

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'Estás conectado a nuestra API'
    })
})

module.exports = router
