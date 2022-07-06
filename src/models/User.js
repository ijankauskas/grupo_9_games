const fs = require('fs')
const path = require('path');
const { destroy } = require('../controllers/productosController');


const User = {
    fielName: path.join(__dirname, '../data/users.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fielName, 'utf-8'));
    },

    generateId: function(){
        let users = this.findAll();
        let lastUser = users.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function(){
        return this.getData();
    },
    
    findByPk: function(id){
        let users = this.findAll();
        let userFound = users.find( oneUser => oneUser.id === id)
        return userFound;
    },

    findByField: function(field, text){
        let users = this.findAll();
        let userFound = users.find( oneUser => oneUser[field] === text)
        return userFound;
    },

    create: function(userData){
        let users = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        users.push(newUser);
        fs.writeFileSync(this.fielName, JSON.stringify(users, null, ' '))
        return newUser
    },

    destroy: function(id){
        let users = this.findAll();
        let finalUser = users.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fielName, JSON.stringify(finalUser, null, ' '))
        return true
    }
    
}

module.exports = User;