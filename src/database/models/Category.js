module.exports = function(sequelize, dataTypes){
    let alias = "Category";

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
        tableName: 'categoria',
        timestamps: false,
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Game, {
            as: 'games',
            foreingKey: 'categoria_id'
        });
    }

    return Category;
}