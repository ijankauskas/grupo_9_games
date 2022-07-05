const fs = require('fs')
const path = require('path');


const User = {
    fielName: path.join(__dirname, '../data/users.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fielName, 'utf-8'));
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
        users.push(userData);
        fs.writeFileSync(this.fielName, JSON.stringify(users, null, ' '))
        return true
    }
    
}

console.log(User.create({
    nombre: 'nacho',
    id: 4,
    edad:'5 años'
}))