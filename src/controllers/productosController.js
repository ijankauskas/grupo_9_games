const path = require('path');

const productosController = {
    listar: (req, res)=>{
        res.render('./products/productDetail');
    },

    detalle: (req, res)=>{
        let productoFinal;
        let idProducto= req.params.idProducto
        for(let producto of listaProductos){
            if(idProducto == producto.id){
                productoFinal = producto;
            }
        }
        res.render('./user/prueba', {producto: productoFinal});
    }
};

module.exports = productosController;