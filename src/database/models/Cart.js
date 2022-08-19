module.exports = function(sequelize, dataTypes){
    let alias = "Cart";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        juego_id: {
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        }
    }
        
    let config ={
        tableName: 'carrito',
        timestamps: false,
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.belongsTo(models.Game, {
            as: 'games',
            foreignKey: 'juego_id'
        });
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'usuario_id'
        });
    }

    return Cart;
}