const express = require('express');
const router = express.Router();


//controller
const productosController = require('../controllers/productosController');


//middleware
const upload = require('../middleware/multerProductsMiddleware');
const cpUpload = upload.fields([{ name: 'imagenLogo', maxCount: 1 }, { name: 'imagenes', maxCount: 10 }])
const validation = require('../middleware/validProductsMiddleware');
const authMiddleware = require('../middleware/authMiddleware');



//rutas
router.get('/search', productosController.search);

router.get('/detail/:idProducto', productosController.detalle);

router.get('/create', productosController.create);
router.post('/create', cpUpload, validation ,productosController.nuevoProducto);

router.get('/edit/:idProducto', productosController.editar); 
router.put('/:idProducto', cpUpload, productosController.update); 

router.get('/cart',  productosController.cart); //authMiddleware
router.get('/cart/:idProducto',  productosController.cartPush); //authMiddleware

router.delete('/:id', productosController.destroy); 


//exports
module.exports = router;