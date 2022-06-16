const express =  require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();
const path = require('path');

router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/cart', mainController.cart);

router.get('/prueba', mainController.prueba);

module.exports = router;