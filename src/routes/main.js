const express =  require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();
const path = require('path');

router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/cart', mainController.cart);

router.get('/create', mainController.create);

router.get('/edit', mainController.edit);

router.get('/prueba', mainController.prueba);

module.exports = router;