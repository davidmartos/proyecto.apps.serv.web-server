var router = require('express').Router()
var reservasController = require('../controllers/reservasController')

router.get('/search', function (req, res) {
    reservasController.search(req, res)
})
router.get('/', function (req, res) {
    reservasController.list(req, res)
})
router.get('/:id', function (req, res) {
    reservasController.show(req, res)
})
router.post('/', function (req, res) {
    reservasController.create(req, res)
})
router.put('/:id', function (req, res) {
    reservasController.update(req, res)
})
router.delete('/:id', function (req, res) {
    reservasController.remove(req, res)
})
module.exports = router
