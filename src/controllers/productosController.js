const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;


const Product = require('../models/Products');
const User = require('../models/User');


const listaProductos = path.join(__dirname, '../data/listaProductos.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));

const listaUsers = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(listaUsers, 'utf-8'));


const productosController = {

    listar: (req, res)=>{
        res.render('./products/productDetail');
    },

    detalle: (req, res)=>{
        db.Game.findByPk(req.params.idProducto, {
            include: [
                {association: 'genre'},
                {association: 'category'},
                {association: 'compatibility'},
            ]
        })
            .then((producto) =>{
                let arrayImagenes = producto.imagenes.split(',');
                producto.imagenes = arrayImagenes;
                res.render('./products/productDetail', {producto});
            });
    },

    create: (req, res)=>{
        res.render('./products/create');
    },

    nuevoProducto: (req, res)=> {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            fs.unlinkSync('req.body.file.filename')
            return res.render('./products/create', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };

        let imagenes = '/imagenes/' + req.files['imagenes'][0].filename;
        for(let i = 1 ; i< req.files['imagenes'].length ; i++){
            imagenes += (',/imagenes/' + req.files['imagenes'][i].filename)
        };
        
        db.Game.create({
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            genero_id: req.body.genero,
            imagenLogo: '/imagenes/' + req.files['imagenLogo'][0].filename,
            imagenes: imagenes,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            minimo: "Requiere un procesador y un sistema operativo de 64 bits.",
            so: req.body.os,
            procesador: req.body.procesador,
            memoria: req.body.memoria,
            graficos: req.body.graficos,
            almacenamiento: req.body.almacenamiento,
            notasAdicionales: req.body.notasAdicionales,
        }).then(game => {
            for(let compatibilidad of req.body.compatibilidad){
                db.Game_compatibility.create({
                    juegos_id: game.id,
                    compatibilidad_id: compatibilidad
                })
            }
            res.redirect('/product/detail/' + game.id);
        });
    },

    editar: (req, res)=>{
        db.Game.findByPk(req.params.idProducto)
            .then((producto) =>{
                console.log(res.locals.userLogged);
                res.render('./products/edit', {producto});
            });
    },

    update: (req, res)=>{
        let imagenes = req.files['imagenes'][0].filename;
        for(let i = 1 ; i< req.files['imagenes'].length ; i++){
            imagenes += (',/imagenes/' + req.files['imagenes'][i].filename)
        };

        db.Game.update(
            {
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            genero_id: req.body.genero,
            imagenLogo: '/imagenes/' + req.files['imagenLogo'][0].filename,
            imagenes: imagenes,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            minimo: "Requiere un procesador y un sistema operativo de 64 bits.",
            so: req.body.os,
            procesador: req.body.procesador,
            memoria: req.body.memoria,
            graficos: req.body.graficos,
            almacenamiento: req.body.almacenamiento,
            notasAdicionales: req.body.notasAdicionales,
            },
            {
                where: {id: req.params.idProducto}
            }
        );
        res.redirect('/product/' + req.params.idProducto);
    },

    destroy: (req, res) => {
        db.Game.destroy({
            where: {id: req.params.id}
        }).then(function(){
            db.Game_compatibility.destroy({
                where: {juegos_id: req.params.id}
            })
            res.redirect('/');
        })
	},

    search: (req,res)=>{
        let buscar = '%' + req.query.query + '%'
        db.Game.findAll(
            {
            where: {nombre: {[Op.like]: buscar}},
            include: [
                {association: 'genre'},
                {association: 'category'},
                {association: 'compatibility'},
            ]
        }).then(productos=>{
            res.render('./main/resultado', {productos});
        })
    },

    cart: (req, res)=>{
        let cartUser = req.session.userLogged.id;
        db.Cart.findAll({
            where: {usuario_id: cartUser},
            include: [
                {   
                    association: 'games', include:{association: 'compatibility'},
                    where: {
                    }
                }
            ]
        }).then((games)=>{
            res.render('./products/cart', {cart:games});
        })
    },

    cartPush: (req, res)=>{
        db.Cart.create({
            usuario_id: req.session.userLogged.id,
            juego_id: parseInt(req.params.idProducto)
        }).then(()=>{
            res.redirect('/product/cart');
        })
    },
};

module.exports = productosController;