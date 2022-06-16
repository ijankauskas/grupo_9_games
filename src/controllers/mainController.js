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

    create: (req, res)=>{
        res.render('./user/create');
    },

    edit: (req, res)=>{
        res.render('./user/edit');
    },
}

module.exports = mainController;