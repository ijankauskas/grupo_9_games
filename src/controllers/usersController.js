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
        }
        res.redirect('/')
    },


}

module.exports = userController;