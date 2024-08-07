import express from "express";
import 'dotenv/config';

// Load environment variables from .env file

// import cors from "cors";

import routes from "./routes/index.js";
import databaseConnect from "./database/dbConnect.js";
import cors from "cors";
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
