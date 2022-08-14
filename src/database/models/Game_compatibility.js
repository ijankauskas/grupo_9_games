
module.exports = function(sequelize, dataTypes){
    let alias = "Game_compatibility";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        juegos_id: {
            type: dataTypes.INTEGER,
        },
        compatibilidad_id: {
            type: dataTypes.INTEGER,
        }
    }
        
    let config ={
        tableName: 'juegos_compatibilidad',
        timestamps: false,
    }

    let Game_compatibility = sequelize.define(alias, cols, config);

    Game_compatibility.associate = function(models){
        Game_compatibility.hasMany(models.Game, {
            as: 'games',
            foreignKey: 'id'
        });
        Game_compatibility.hasMany(models.Compatibility, {
            as: 'compatibility',
            foreignKey: 'id'
        });
    }

    return Game_compatibility;
}