const {body} = require('express-validator');
const path = require('path');


const validation = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    
    body('precio').notEmpty().withMessage('Tiene que tener un precio'),

    body('descripcion').notEmpty().withMessage('Tiene que tener una descripcion'),

    body('genero').notEmpty().withMessage('Tienes que elegir un genero'),

    body('categoria').notEmpty().withMessage('Tienes que elegir un categoria'),

    body('os').notEmpty().withMessage('Tienes que poner el sistema operativo minimo'),

    body('procesador').notEmpty().withMessage('Tienes que poner el procesador minimo'),

    body('graficos').notEmpty().withMessage('Tienes que poner los graficos minimo'),

    body('almacenamiento').notEmpty().withMessage('Tienes que poner el almacenamiento minimo'),

];

module.exports = validation ;