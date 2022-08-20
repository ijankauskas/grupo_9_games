module.exports = function(sequelize, dataTypes){
    let alias = "User";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        admin_id: {
            type: dataTypes.INTEGER,
        },
        password: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.STRING,
        },
        avatar: {
            type: dataTypes.STRING,
        }
    }
        
    let config= {
        tableName: 'usuarios',
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'carrito',
            foreignKey: 'usuario_id',
            otherKey: 'juego_id',
            timestamps: false
        });
    }

    return User;
}