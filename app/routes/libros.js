var router = require('express').Router()
var librosController = require('../controllers/librosController')
var middleware = require('../middlewares/middleware');

router.get('/search', middleware.ensureAuthenticated, function (req, res) {
    librosController.search(req, res)
})
router.get('/', middleware.ensureAuthenticated, function (req, res) {
    librosController.list(req, res)
})
router.get('/:id', middleware.ensureAuthenticated, function (req, res) {
    librosController.show(req, res)
})
router.post('/', middleware.ensureAuthenticated, function (req, res) {
    librosController.create(req, res)
})
router.put('/:id', middleware.ensureAuthenticated, function (req, res) {
    librosController.update(req, res)
})
router.delete('/:id', middleware.ensureAuthenticated, function (req, res) {
    librosController.remove(req, res)
})
module.exports = router
