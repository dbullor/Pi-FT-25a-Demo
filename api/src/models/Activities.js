const { DataTypes, INTEGER, Op } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    name: {
      type: DataTypes.STRING
    },
    difficulty:{
        type: DataTypes.INTEGER,
        where:{
            [Op.between]: [1, 5]
        }

    },
    duration:{
        type: DataTypes.STRING
    },
    season: {
        type: DataTypes.STRING
    }

  })

}