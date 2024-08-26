import express from "express";
import 'dotenv/config';

// Load environment variables from .env file

// imports para https
import fs from 'fs';
import https from 'https';
import cors from "cors";


import routes from "./routes/index.js";
import databaseConnect from "./database/dbConnect.js";
const app = express();


const connection = await databaseConnect();

connection.on("error", (erro) => {
    console.log("erro de conexao:", erro);
})
connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`escutando na porta ${PORT}`);
})

// https
// https.createServer({
//     cert: fs.readFileSync("src/SSL/code.crt"),
//     key: fs.readFileSync("src/SSL/code.key")
// }, app).listen(80, ()=> console.log("rodando em https"));
