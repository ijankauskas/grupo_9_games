const fs = require('fs');
const path = require('path');

const listaProductos = path.join(__dirname, '../data/users.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));

const userController = {

    login: (req, res)=>{
        res.render('./user/login');
    },

    register: (req, res)=>{
        res.render('./user/register');
    },

}

module.exports = userController;