var router = require('express').Router()
var usuariosController = require('../controllers/usuariosController')
var middleware = require('../middlewares/middleware')

router.get('/search',  middleware.ensureAuthenticated, function (req, res) {
    usuariosController.search(req, res)
})
router.get('/',  middleware.ensureAuthenticated, function (req, res) {
    usuariosController.list(req, res)
})
router.get('/:id',  middleware.ensureAuthenticated, function (req, res) {
    usuariosController.show(req, res)
})
router.post('/',  middleware.ensureAuthenticated, function (req, res) {
    usuariosController.create(req, res)
})
router.put('/:id', middleware.ensureAuthenticated,  function (req, res) {
    usuariosController.update(req, res)
})
router.delete('/:id',  middleware.ensureAuthenticated, function (req, res) {
    usuariosController.remove(req, res)
})
module.exports = router
