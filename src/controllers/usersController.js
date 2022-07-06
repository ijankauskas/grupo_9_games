const { render } = require('ejs');
const bcryptjs = require ('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const User = require('../models/User')


const JSONUsers = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(JSONUsers, 'utf-8'));

const userController = {

    login: (req, res)=>{
        res.render('./user/login');
    },

    processLogin: (req, res)=>{
        let userToLogin = User.findByField('email', req.body.email)
        if(userToLogin){
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordOk){
                return res.send('ok')
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
        return res.render('./user/login', {
            errors: {
                email: {
                    msg: 'Email no registrado'
                }
            },
            oldData: req.body
        });
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

        let userInDb = User.findByField('email', req.body.email);
        if(userInDb){
            return res.render('./user/register', {
                errors: {
                    email: {
                        msg: 'este mail ya esta en uso'
                    }
                },
                oldData: req.body
            }); 
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password),
            passwordConfirm: bcryptjs.hashSync(req.body.passwordConfirm),
            avatar: '/imagenes/avatars/' + req.file.filename,
            cart: []
        }

        let userCreated = User.create(userToCreate);
        res.redirect('/users/login')
    },


}

module.exports = userController;