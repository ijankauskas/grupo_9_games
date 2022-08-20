const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const listaProductos = path.join(__dirname, '../data/listaProductos.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));

const mainController = {
    home: (req, res)=>{
		db.Game.findAll({
			include: [
                {association: 'genre'},
                {association: 'category'},
                {association: 'compatibility'},
            ]
		}).then(productos => {
			res.render('./main/home', {productos});
		})
    }
}

module.exports = mainController;