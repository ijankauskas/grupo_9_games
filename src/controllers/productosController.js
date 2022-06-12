const path = require('path');

const productosController = {
    listar: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/products/productDetail.html'))
    },

    detalle: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/products/productDetail.html'))
    }
};

module.exports = productosController;