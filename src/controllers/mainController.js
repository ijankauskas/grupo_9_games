const path = require('path');

const mainController = {
    home: (req, res)=>{
        res.render('./user/home');
    },

    login: (req, res)=>{
        res.render('./user/login');
    },

    register: (req, res)=>{
        res.render('./user/register');
    },

    cart: (req, res)=>{
        res.render('./user/cart');
    },

    prueba: (req, res)=>{
        res.render('./user/prueba');
    },

    foto: (req, res)=>{
        res.render('./user/prueba');
    },
}

module.exports = mainController;