import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Receta } from "./Recetas.js";

export const Usuario = sequelize.define(
  "usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    str_nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    str_apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    str_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    str_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    str_telefono: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    // schema: "alimentos",
  }
);

/*Usuario.hasMany(Receta, { foreignKey: "usuarioId", sourceKey: "id" });
Receta.belongsTo(Usuario, { foreignKey: "usuarioId", sourceKey: "id" });*/
