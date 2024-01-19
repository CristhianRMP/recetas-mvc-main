import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "9iZy90V7vB0PLQfrGXnO",
  {
    host: "containers-us-west-91.railway.app",
    dialect: "postgres",
    port: 7261,
  }
);
