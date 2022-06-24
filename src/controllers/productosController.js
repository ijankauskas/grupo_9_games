const fs = require('fs');
const path = require('path');

const listaProductos = path.join(__dirname, '../data/listaProductos.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));


const productosController = {
    buscarProducto : (id)=>{
        let productoFinal;
        let idProducto= id
        for(let producto of productos){
            if(idProducto == producto.id){
                productoFinal = producto;
            }
        }
        return productoFinal
    },

    listar: (req, res)=>{
        res.render('./products/productDetail');
    },

    detalle: (req, res)=>{
        res.render('./products/productDetail', {producto: productosController.buscarProducto(req.params.idProducto)});
    },

    create: (req, res)=>{
        res.render('./products/create');
    },

    nuevoProducto: (req, res)=>{
		let nuevoProducto = req.body;
        nuevoProducto.id = productos[productos.length -1].id +1;
        productos.push(nuevoProducto);
        let JSONNuevoProducto = JSON.stringify(productos);
        fs.writeFileSync(listaProductos, JSONNuevoProducto)
		res.render('./products/create');
    }

};

module.exports = productosController;