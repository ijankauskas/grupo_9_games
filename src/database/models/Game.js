module.exports = function(sequelize, dataTypes){
    let alias = "Game";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        categoria_id:{
            type: dataTypes.INTEGER,
        },
        genero_id:{
            type: dataTypes.INTEGER,
        },
        imagenLogo:{
            type: dataTypes.STRING,
        },
        imagenes:{
            type: dataTypes.STRING,
        },
        precio:{
            type: dataTypes.INTEGER,
        },
        descuento:{
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        minimo:{
            type: dataTypes.STRING,
        },
        so:{
            type: dataTypes.STRING,
        },
        procesador:{
            type: dataTypes.STRING,
        },
        memoria:{
            type: dataTypes.STRING,
        },
        graficos:{
            type: dataTypes.STRING,
        },
        almacenamiento:{
            type: dataTypes.STRING,
        },
        notasAdicionales:{
            type: dataTypes.STRING,
        }
    }

    let config ={
        tableName: 'juegos',
        timestamps: false,
    }

    const Game = sequelize.define(alias, cols, config);

    Game.associate = function(models){
        Game.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoria_id'
        });
        Game.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: "genero_id"
        });
        Game.belongsToMany(models.Compatibility, {
            as: 'compatibility',
            through: 'juegos_compatibilidad',
            foreignKey: 'juegos_id',
            otherKey: 'compatibilidad_id',
            timestamps: false
        });
    }

    return Game;
}