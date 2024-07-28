import express from "express";

const anamneseRoutes = express.Router();

anamneseRoutes.get("/teste", (req, res) => {
    return res.json({message: "testando"})
})

export default anamneseRoutes;