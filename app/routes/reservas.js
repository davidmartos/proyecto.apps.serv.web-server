var router = require('express').Router()
var reservasController = require('../controllers/reservasController')
var middleware = require('../middlewares/middleware');

router.get('/search', middleware.ensureAuthenticated, function (req, res) {
    reservasController.search(req, res)
})
router.get('/',  middleware.ensureAuthenticated, function (req, res) {
    reservasController.list(req, res)
})
router.get('/:id',  middleware.ensureAuthenticated, function (req, res) {
    reservasController.show(req, res)
})
router.post('/',  middleware.ensureAuthenticated, function (req, res) {
    reservasController.create(req, res)
})
router.put('/:id', middleware.ensureAuthenticated,  function (req, res) {
    reservasController.update(req, res)
})
router.delete('/:id', middleware.ensureAuthenticated,  function (req, res) {
    reservasController.remove(req, res)
})
module.exports = router
