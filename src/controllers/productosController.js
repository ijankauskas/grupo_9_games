const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const Product = require('../models/Products');
const User = require('../models/User');


const listaProductos = path.join(__dirname, '../data/listaProductos.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));

const listaUsers = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(listaUsers, 'utf-8'));


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

    nuevoProducto: (req, res)=> {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('./products/create', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } 
        console.log(req.files)
        let imagenes = [];
        for(let i = 0 ; i< req.files.length ; i++){
            imagenes.push('/imagenes/' + req.files[i].filename)
        }

        let productToCreate = {
            ...req.body,
            imagenes: imagenes,
        }
        let productCreate = Product.create(productToCreate);
        res.redirect('/product/detail/'+ productCreate.id)
    },

    editar: (req, res)=>{
        res.render('./products/edit' ,{producto: productosController.buscarProducto(req.params.idProducto)});
    },

    update: (req, res)=>{
        let producto = productosController.buscarProducto(req.params.idProducto)
        let actualizacion = req.body;
        for(let propiedad in actualizacion){
            if(actualizacion[propiedad] != ""){
                producto[propiedad] = req.body[propiedad];
            }   
        }
        fs.writeFileSync(listaProductos, JSON.stringify(productos, null, ' '));
        res.redirect('/product/detail/'+ req.params.idProducto);
    },

    cart: (req, res)=>{
        res.render('./products/cart');
    },

    cartPush: (req, res)=>{
        User.update(req.session.userLogged.id, req.params.idProducto);        
        res.redirect('/product/cart');
    },

    destroy: (req, res) => {
        let id = req.params.id;
        Product.destroy(id);
        res.redirect('/');
	}
};

module.exports = productosController;