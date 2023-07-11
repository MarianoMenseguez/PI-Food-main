const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
    
      defaultValue: DataTypes.UUIDV4,
     
      allowNull: false,
      primaryKey: true
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
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    steps: { 
      type: DataTypes.ARRAY(DataTypes.STRING),
      // se utiliza para definir un campo de tipo matriz y contiene valores de tipo STRING
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false
  });
};

