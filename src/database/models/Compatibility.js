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
        },
        icono: {
            type: dataTypes.STRING,
        }
    }
        
    let config ={
        tableName: 'compatibilidad',
        timestamps: false,
    }

    let Compatibility = sequelize.define(alias, cols, config);

    Compatibility.associate = function(models){
        Compatibility.belongsToMany(models.Game, {
            as: 'compatibility',
            through: 'juegos_compatibilidad',
            foreingKey: 'compatibilidad_id',
            otherKey: 'juegos_id',
            timestamps: false
        });
    }

    return Compatibility;
}