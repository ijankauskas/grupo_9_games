const { render } = require('ejs');
const bcryptjs = require ('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const db = require('../database/models');


const userController = {

    login: (req, res)=>{
        res.render('./user/login');
    },

    processLogin: (req, res)=>{
        db.User.findOne({
            where: {email: req.body.email}
        }).then(userToLogin => {
            if(userToLogin){
                let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if(passwordOk){
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
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
            }
        })
    },

    register: (req, res)=>{
        res.render('./user/register');
    },

    processRegister: (req, res)=>{
        // const resultValidation = validationResult(req);
        // if(resultValidation.errors.length > 0){
        //     return res.render('./user/register', {
        //         errors: resultValidation.mapped(),
        //         oldData: req.body
        //     });
        // }

        // db.User.findOne({
        //     where: {email: req.body.email}
        // }).then(userInDb => {
        //     if(userInDb){
        //         return res.render('./user/register', {
        //             errors: {
        //                 email: {
        //                     msg: 'este mail ya esta en uso'
        //                 }
        //             },
        //             oldData: req.body
        //         })
        //     }
        // })

        db.User.create({
            nombre: req.body.nombre,
            password: bcryptjs.hashSync(req.body.password),
            email: req.body.email,
            fecha: req.body.fecha,
            avatar: '/imagenes/avatars/' + req.file.filename,
        }).then( () =>{
            return res.redirect('/user/login')
        })
    },

    logout: function(req, res){
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = userController;