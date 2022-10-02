const db = require('../../database/models')

const apiProductosController = {
    'list': (req, res)=>{
        db.Game.findAll({
            include: [
                {association: 'genre'},
                {association: 'category'},
                {association: 'compatibility'},
            ]
        }).then(games => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: games.length,
                    url: 'api/productos'
                },
                data: games
            }
            res.json(respuesta)
        })
    },
    
    'detail': (req, res)=>{
        db.Game.findByPk(req.params.id, {
            include: [
                {association: 'genre'},
                {association: 'category'},
                {association: 'compatibility'},
            ]
        }).then(producto => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: producto.length,
                    url: 'api/productos/:id'
                },
                data: producto
            }
            res.json(respuesta)
        })
            
    }
}

module.exports = apiProductosController;