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
        if(req.files) {
            let nuevoProducto = req.body;
            imagenes = req.files
            nuevoProducto.imagenes = [];
            for(let i = 0 ; i< imagenes.length ; i++){
                nuevoProducto.imagenes.push('/imagenes/' + imagenes[i].filename)
            }
            nuevoProducto.id = productos[productos.length -1].id +1;
            productos.push(nuevoProducto);
            fs.writeFileSync(listaProductos, JSON.stringify(productos, null, ' '));
            res.redirect('/product/detail/'+ nuevoProducto.id)
        } else {
            res.render('./products/create')
        }
    },

    editar: (req, res)=>{
        res.render('./products/edit' ,{producto: productosController.buscarProducto(req.params.idProducto)});
    },

    update: (req, res)=>{
        let producto = productosController.buscarProducto(req.params.idProducto)
        let actualizacion = req.body;
        for(let propiedad in actualizacion){
            console.log(producto);
            if(propiedad != ""){
                producto[propiedad] = req.body[propiedad];
            }   
        }
        fs.writeFileSync(listaProductos, JSON.stringify(productos, null, ' '));
        res.redirect('/product/detail/'+ req.params.idProducto)
    },

    cart: (req, res)=>{
        res.render('./products/cart');
    },

    destroy : (req, res) => {
        let id = req.params.id -1 ;
        for(let imagen of productos[id].imagenes){
            fs.unlinkSync(path.join(__dirname, '../../public' + imagen))
        }
		productos.splice((id), 1);
        fs.writeFileSync(listaProductos, JSON.stringify(productos, null, ' '));
        res.redirect('/')
	}
};

module.exports = productosController;