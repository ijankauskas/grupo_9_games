const {body} = require('express-validator');
const path = require('path');


const validation = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('precio').notEmpty().withMessage('Tiene que tener un precio'),

    body('descripcion').notEmpty().withMessage('Tiene que tener una descripcion'),

    body('genero').notEmpty().withMessage('Tienes que elegir un genero'),
];

module.exports = validation ;