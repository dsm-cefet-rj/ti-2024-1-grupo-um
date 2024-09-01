import express from "express";
import 'dotenv/config';
import swaggerUi from "swagger-ui-express";
// Load environment variables from .env file

// imports para https
import fs from 'fs';
import https from 'https';
import cors from "cors";

import path from 'path';

import routes from "./routes/index.js";
import databaseConnect from "./database/dbConnect.js";
const swaggerDocsPath = path.resolve('./src/swagger.json');
const swaggerDocs = JSON.parse(fs.readFileSync(swaggerDocsPath, 'utf8'));
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`escutando na porta ${PORT}`);
})


