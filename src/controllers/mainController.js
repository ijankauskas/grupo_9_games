const path = require('path');

const mainController = {
    home: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/user/home.html'))
    },

    login: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/user/login.html'))
    },

    register: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/user/register.html'))
    },

    cart: (req, res)=>{
        res.sendFile(path.join(__dirname,'../view/user/cart.html'))
    },
}

module.exports = mainController;