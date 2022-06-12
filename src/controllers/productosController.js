const path = require('path');

const productosController = {
    mostrar: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/user/productDetail.html'))
    },
};

module.exports = productosController;