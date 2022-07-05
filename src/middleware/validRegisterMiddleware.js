const {body} = require('express-validator');
const path = require('path');


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

module.exports = validation;