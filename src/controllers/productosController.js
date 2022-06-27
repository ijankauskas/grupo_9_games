const { render } = require('ejs');
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
        if(req.file) {
            let nuevoProducto = req.body;
        imagenes = req.files
        nuevoProducto.imagenes = [];
        for(let i = 0 ; i< imagenes.length ; i++){
            nuevoProducto.imagenes.push('/imagenes/' + imagenes[i].filename)
        }
        nuevoProducto.id = productos[productos.length -1].id +1;
        productos.push(nuevoProducto);
        let JSONNuevoProducto = JSON.stringify(productos);
        fs.writeFileSync(listaProductos, JSONNuevoProducto)
		res.redirect('/product/detail/'+ nuevoProducto.id)
        } else {
            res.render('./products/create')
        }
		
    },

    editar: (req, res)=>{
        res.render('./products/edit' ,{producto: productosController.buscarProducto(req.params.idProducto)});
    },

    update: (req, res)=>{
        let id = req.params.idProducto
        let productosNuevos = productos;
        let i=0;
        for(let producto of productos){
            if(producto.id== id){
                productosNuevos[i]= req.body
            }
            i++
        }
        let JSONNuevoProducto = JSON.stringify(productosNuevos);
        fs.writeFileSync(listaProductos, JSONNuevoProducto)
        res.redirect('/product/detail/'+ id)
    },

    cart: (req, res)=>{
        res.render('./products/cart');
    },

};

module.exports = productosController;