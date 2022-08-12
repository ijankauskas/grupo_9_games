module.exports = function(sequelize, dataTypes){
    let alias = "Users";

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

    let Users = sequelize.define(alias, cols, config);

    Users.associate = function(models){
        Users.hasMany(models.Game, {
            as: 'games',
            foreignKey: 'genero_id'
        });
    }
    return Users;
}