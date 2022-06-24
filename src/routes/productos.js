const express = require('express');
const   productosController = require('../controllers/productosController');

const router = express.Router();
const path = require('path');

router.get('/', productosController.listar);

router.get('/detail/:idProducto', productosController.detalle);

router.get('/create', productosController.create);
router.post('/create', productosController.nuevoProducto);

module.exports = router