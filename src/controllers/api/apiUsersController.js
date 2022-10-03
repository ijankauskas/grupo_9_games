const db = require('../../database/models')

const apiUsersController = {
    'list': (req,res)=>{
        db.User.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/usuarios'
                    },
                    data: users
                }
                res.json(respuesta)
            })
    }
}

module.exports = apiUsersController;