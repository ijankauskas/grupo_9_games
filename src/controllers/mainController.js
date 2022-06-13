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
}

module.exports = mainController;