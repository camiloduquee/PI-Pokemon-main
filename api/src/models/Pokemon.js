const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      Imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true, 
        }
      },
      Vida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Velocidad: {
        type: DataTypes.INTEGER,
      },
      Altura: {
        type: DataTypes.INTEGER,
      },
      Peso: {
        type: DataTypes.INTEGER,
      },
      
    },
    { timestamps: false }
  );
};
