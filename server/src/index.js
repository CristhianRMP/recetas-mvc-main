import app from "./app.js";
import { sequelize } from "./database/database.js";

// conexion a la base de datos
async function main() {
  try {
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false });
    app.listen(4400);
    console.log("Server is listening on port", 4400);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
