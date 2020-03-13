var router = require('express').Router()
var usuarios = require('./usuarios')
var authController = require('../controllers/authController')

router.post('/login', authController.emailLogin);

module.exports = router
