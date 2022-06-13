const path = require('path');

const productosController = {
    listar: (req, res)=>{
        res.render('./products/productDetail');
    },

    detalle: (req, res)=>{
        res.render('./products/productDetail');
    }
};

module.exports = productosController;