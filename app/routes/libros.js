var router = require('express').Router()
router.get('/search', function (req, res) {
    res.json({
        message: 'Vas a buscar un libro'
    })
})
router.get('/', function (req, res) {
    res.json({
        message: 'Estás conectado a la API. Recurso: libros'
    })
})
router.get('/:id', function (req, res) {
    res.json({
        message: 'Vas a obtener el libro con id ' + req.params.id
    })
})
router.post('/', function (req, res) {
    res.json({
        message: 'Vas a añadir un libro'
    })
})
router.put('/:id', function (req, res) {
    res.json({
        message: 'Vas a actualizar el libro con id ' + req.params.id
    })
})
router.delete('/:id', function (req, res) {
    res.json({
        message: 'Vas a borrar el libro con id ' + req.params.id
    })
})
module.exports = router
