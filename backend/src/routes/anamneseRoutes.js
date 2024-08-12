import express from "express";
import {createAnamnese, updateAnamnese, deleteAnamnese, getAnamneseByUserId} from "../controllers/anamneseController.js"

const anamneseRoutes = express.Router();

anamneseRoutes.post("/anamnese", createAnamnese)
anamneseRoutes.get("/anamnese/:userId", getAnamneseByUserId)
anamneseRoutes.delete("/anamnese/:id", deleteAnamnese)
anamneseRoutes.put("/anamnese", updateAnamnese)


export default anamneseRoutes;