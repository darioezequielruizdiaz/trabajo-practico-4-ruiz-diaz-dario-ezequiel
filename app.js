import express from "express"
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`EL servidor se está ejecutando en ${chalk.bgMagenta(`http://localhost:${PORT}/`)}`);
})