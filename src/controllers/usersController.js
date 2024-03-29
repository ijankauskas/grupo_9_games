const { render } = require('ejs');
const bcryptjs = require ('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const db = require('../database/models');


const userController = {

    login: (req, res)=>{
        res.render('./user/login');
    },

    edit: (req, res)=>{
        console.log(req.session.userLogged.id);
        db.User.findByPk(req.session.userLogged.id)
            .then((user) =>{
                console.log(user);
                res.render('./user/UpdateUser', {user});
            });
    },

    update: (req, res)=>{
        console.log(req.file.filename);
        db.User.update(
            {
                nombre: req.body.nombre,
                password: bcryptjs.hashSync(req.body.password),
                email: req.body.email,
                fecha: req.body.fecha,
                avatar: '/imagenes/avatars/' + req.file.filename,
                admin_id: 1
            },
            {
                where: {id: req.session.userLogged.dataValues.id}
            }
        );
        res.redirect('/');
    },

    processLogin: (req, res)=>{
        db.User.findOne({
            where: {email: req.body.email}
        }).then(userToLogin => {
            if(userToLogin){
                let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if(passwordOk){
                    delete userToLogin.dataValues.password;
                    req.session.userLogged = userToLogin.dataValues;
                    if(req.body.recordarme){
                        res.cookie('userEmail', req.body.email, {maxAge: (((1000 * 60) * 60) * 24) * 7 })
                    }
                    return res.redirect('/')
                }else{
                    return res.render('./user/login', {
                        errors: {
                            password: {
                                msg: 'Credecianles invalidas'
                            }
                        },
                        oldData: req.body
                    });
                }
            }else{
                return res.render('./user/login', {
                    errors: {
                        password: {
                            msg: 'Credecianles invalidas'
                        }
                    },
                    oldData: req.body
                });
            }
        })
    },

    register: (req, res)=>{
        res.render('./user/register');
    },

    processRegister: (req, res)=>{
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('./user/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        db.User.findOne({
            where: {email: req.body.email}
        }).then(userInDb => {
            if(userInDb){
                return res.render('./user/register', {
                    errors: {
                        email: {
                            msg: 'este mail ya esta en uso'
                        }
                    },
                    oldData: req.body
                })
            }
        })

        db.User.create({
            nombre: req.body.nombre,
            password: bcryptjs.hashSync(req.body.password),
            email: req.body.email,
            fecha: req.body.fecha,
            avatar: '/imagenes/avatars/' + req.file.filename,
            admin_id: 1
        }).then( () =>{
            return res.redirect('/users/login')
        })
    },

    logout: function(req, res){
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/')
    },

    profile: function(req, res){
        res.render('./user/profile')
    }
}

module.exports = userController;