import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Receta = sequelize.define(
  "receta",
  {
    id_receta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    str_receta_nombre: {
      type: DataTypes.STRING(100),
    },
    str_autor_nombre: {
      type: DataTypes.STRING,
    },
    str_autor_telefono: {
      type: DataTypes.STRING,
    },
    str_autor_correo: {
      type: DataTypes.STRING,
    },
    str_receta_image: {
      type: DataTypes.TEXT,
    },
    str_receta_preparacion: {
      type: DataTypes.TEXT,
    },
    str_receta_dificultad: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
    // schema: "alimentos",
  }
);
