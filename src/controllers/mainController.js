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
			// res.json(productos[4])
			res.render('./main/home', {productos});
		})
    },

    search: (req, res) => {
		let loQueBusca = req.query.query.toLowerCase();
		let arrayBuscado = []
		for(let i = 0 ; i<productos.length ; i++)
			if(productos[i].nombre.toLowerCase().includes(loQueBusca)){
				arrayBuscado.push(productos[i]);
			}
			res.render('./main/resultado' , {productos: arrayBuscado, loQueBusca})
	},
}

module.exports = mainController;