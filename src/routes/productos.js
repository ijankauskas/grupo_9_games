const express = require('express');
const   productosController = require('../controllers/productosController')

const router = express.Router();
const path = require('path');

router.get('/', productosController.listar)

router.get('/:idProducto', productosController.detalle)

module.exports = router