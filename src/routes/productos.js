const express = require('express');
const router = express.Router();


//controller
const productosController = require('../controllers/productosController');


//middleware
const upload = require('../middleware/multerProductsMiddleware');
const validation = require('../middleware/validProductsMiddleware')


//rutas
router.get('/', productosController.listar);

router.get('/detail/:idProducto', productosController.detalle);

router.get('/create', productosController.create);
router.post('/create', upload.array('imagenes', 10) ,validation ,productosController.nuevoProducto);

router.get('/edit/:idProducto', productosController.editar); 
router.put('/:idProducto', upload.array('imagenes', 10), productosController.update); 

router.get('/cart', productosController.cart);

router.delete('/:id', productosController.destroy); 


//exports
module.exports = router;