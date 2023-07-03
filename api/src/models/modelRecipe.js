const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        // UUID ---> Identificador unico universal para garantizar la unicidad de cada id
        defaultValue: DataTypes.UUIDV4,
        // se utiliza para generar un UUID aleatorio cada vez que se crea un nuevo registro en la tabla.
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dishSummary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      steps: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        // se utiliza para definir un campo de tipo matriz y contiene valores de tipo STRING
        allowNull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
