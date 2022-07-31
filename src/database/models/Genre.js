module.exports = function(sequelize, dataTypes){
    let alias = "Genre";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        }
    }
        
    let config ={
        tableName: 'genero',
        timestamps: false,
    }

    let Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Game, {
            as: 'games',
            foreingKey: 'genero_id'
        });
    }

    return Genre;
}