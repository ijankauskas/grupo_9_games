const db = require('../../database/models')

const apiGenerosController = {
    'list': (req, res)=>{
        db.Genre.findAll({
            include: [
                {association: 'games'}
            ]
        }).then(generos => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: generos.length,
                    url: 'api/generos'
                },
                data: generos
            }
            res.json(respuesta)
        })
    }
}

module.exports = apiGenerosController;