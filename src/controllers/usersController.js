const { render } = require('ejs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const JSONUsers = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(JSONUsers, 'utf-8'));

const userController = {

    login: (req, res)=>{
        res.render('./user/login');
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
        }else {
            if(req.file) {
                let newUser = req.body;
                newUser.avatar = '/imagenes/' + req.file.filename;
                newUser.id = users[users.length -1].id +1;
                users.push(newUser);
                fs.writeFileSync(JSONUsers, JSON.stringify(users, null, ' '));
                res.redirect('/')
            } else {
                res.render('./products/create')
            }
        }
        res.redirect('/')
    },


}

module.exports = userController;