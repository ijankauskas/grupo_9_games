const fs = require('fs');
const path = require('path');

const listaProductos = path.join(__dirname, '../data/listaProductos.json');
const productos = JSON.parse(fs.readFileSync(listaProductos, 'utf-8'));

const mainController = {
    home: (req, res)=>{
        res.render('./user/home', {productos: productos});
    },

    search: (req, res) => {
		let loQueBusca = req.query.query;
		let arrayBuscado = []
		for(let i = 0 ; i<productos.length ; i++)
			if(productos[i].nombre.includes(loQueBusca)){
				arrayBuscado.push(productos[i]);
			}
			res.render('./user/resultado' , {productos: arrayBuscado, loQueBusca})
	},

    login: (req, res)=>{
        res.render('./user/login');
    },

    register: (req, res)=>{
        res.render('./user/register');
    },

}

module.exports = mainController;