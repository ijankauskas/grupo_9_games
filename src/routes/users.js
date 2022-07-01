const express = require('express');
const usersController = require('../controllers/usersController');
const multer = require('multer');

const router = express.Router();
const path = require('path');

const {body} = require('express-validator');

const validation = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('password')
    .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
    .isLength({min: 8}).withMessage('Tiene que tener al menos 8 caracteres'),
    
    body('passwordConfirm')
    .custom((value, { req }) =>{
        if(value !== req.body.password){
            throw new Error('Las contraseñas tienen que ser iguales');
        }
        return true
    }),

    body('email')
    .notEmpty().withMessage('Tienes que escribir un mail').bail()
    .isEmail().withMessage('No es un formado de email correcto'),

    body('confirmarEmail')
    .notEmpty().withMessage('Tienes que escribir un mail').bail()
    .custom((value, { req }) =>{
        if(value !== req.body.email){
            throw new Error('Los emails tiene que ser iguales');
        }
        return true
    }),
    
    body('fecha').notEmpty().withMessage('Tienes que poner una fecha'),
    
    body('imagenAvatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', 'gif']

        if(!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension =path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('No es un formato valido (jpg, png, gif)');
            }
            
            return true

        }
    })
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