const path = require('path');
const productosController = {
    mostrar: (req, res)=>{
        let product= req.params.idProdcut;
            if(product === undefined){
                return res.send('aca van a venir el listado de productos')
            } else{
                return res.render('productDetail');
            }
    }
};

module.exports = productosController;