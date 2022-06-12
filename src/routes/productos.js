const express = require('express');
const   productosController = require('../controllers/productosController')

const router = express.Router();
const path = require('path');

router.get('/', productosController.mostrar)

module.exports = router