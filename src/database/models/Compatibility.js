module.exports = function(sequelize, dataTypes){
    let alias = "Compatibility";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        plataforma: {
            type: dataTypes.STRING,
        }
    }
        
    let config ={
        tableName: 'compatibilidad',
        timestamps: false,
    }

    let Compatibility = sequelize.define(alias, cols, config);

    Compatibility.associate = function(models){
        Compatibility.hasMany(models.Game, {
            as: 'games',
            foreingKey: 'compatibilidad_id'
        });
    }

    return Compatibility;
}