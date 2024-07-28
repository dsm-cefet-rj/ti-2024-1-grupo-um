import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

const app = express();

app.use(routes);
app.use(express.json());
app.use(cors);

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`escutando na porta ${PORT}`);
})
