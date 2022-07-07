const fs = require('fs')
const path = require('path');

const Product = {
    fielName: path.join(__dirname, '../data/listaProductos.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fielName, 'utf-8'))
    },

    findAll: function(){
        return this.getData();
    },

    generateId: function(){
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if(lastProduct){
            return lastProduct.id + 1;
        }
        return 1;
    },

    findByPk: function(id){
        let allProducts = this.findAll();
        let productFind = allProducts.find(oneProduct => oneProduct.id === id);
        return productFind;
    },

    create: function(userData){
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...userData
        };
        allProducts.push(newProduct);
        fs.writeFileSync(this.fielName, JSON.stringify(allProducts, null, ' '));
        return newProduct
    },

    destroy: function(id){
        let allProducts = this.findAll();
        let finalProduct = allProducts.filter(oneProduct => oneProduct.id != id);
        fs.writeFileSync(this.fielName, JSON.stringify(finalProduct, null, ' '));
        return true
    },
}


module.exports = Product;