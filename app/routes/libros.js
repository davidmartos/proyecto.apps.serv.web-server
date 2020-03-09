var router = require('express').Router()
var librosController = require('../controllers/librosController')

router.get('/search', function (req, res) {
    librosController.search(req, res)
})
router.get('/', function (req, res) {
    librosController.list(req, res)
})
router.get('/:id', function (req, res) {
    librosController.show(req, res)
})
router.post('/', function (req, res) {
    librosController.create(req, res)
})
router.put('/:id', function (req, res) {
    librosController.update(req, res)
})
router.delete('/:id', function (req, res) {
    librosController.remove(req, res)
})
module.exports = router
