const express = require('express');
const usersController = require('../controllers/usersController');
const multer = require('multer');

const router = express.Router();
const path = require('path');

const {body} = require('express-validator')

const validation = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir un mail'),
    body('email').notEmpty().withMessage('Tienes que escribir una contrasela'),
    body('fecha').notEmpty().withMessage('Tienes que poner una fecha'),
];

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/imagenes/avatars'))
    },
    filename: function (req, file, cb) {
        const fielName = Date.now() + "_img" +path.extname(file.originalname)
        cb(null, fielName)
    }
});

const upload = multer({ storage })

router.get('/login', usersController.login);
router.post('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register',upload.single('imagenAvatar') , validation , usersController.processRegister);


module.exports = router;