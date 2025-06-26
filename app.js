import express from "express"
import chalk from "chalk";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";
import routerCharacter from "./src/routes/character.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routerCharacter);

// Iniciamos la base de datos
startDB();

// Hacemos que la app escuche el puerto y deje un mensaje en caso de que 
app.listen(PORT, () => {
    console.log(`EL servidor se está ejecutando en ${chalk.bgMagenta(`http://localhost:${PORT}/`)}`);
})