const express = require('express');
const productosController = require('../controllers/productosController');
const multer = require('multer');

const router = express.Router();
const path = require('path');

const {body} = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/imagenes'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.fieldname + path.extname(file.originalname)
        cb(null, uniqueSuffix)
    }
});

const validation = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('precio').notEmpty().withMessage('Tiene que tener un precio'),

    body('descripcion').notEmpty().withMessage('Tiene que tener una descripcion'),

    body('genero').notEmpty().withMessage('Tienes que elegir un genero'),


];

const upload = multer({ storage })

router.get('/', productosController.listar);

router.get('/detail/:idProducto', productosController.detalle);

router.get('/create', productosController.create);
router.post('/create', upload.array('imagenes', 10) ,validation ,productosController.nuevoProducto);

router.get('/edit/:idProducto', productosController.editar); 
router.put('/:idProducto', upload.array('imagenes', 10), productosController.update); 

router.get('/cart', productosController.cart);

router.delete('/:id', productosController.destroy); 

module.exports = router;