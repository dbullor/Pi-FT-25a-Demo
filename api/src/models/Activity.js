const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
          max: 5,
        }

        

    },
    duration:{
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Winter', 'Spring', 'Autumn'),
        allowNull: false
    }

  })

}