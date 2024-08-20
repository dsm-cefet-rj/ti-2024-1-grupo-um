import express from "express";
import {createAnamnese, updateAnamnese, deleteAnamnese, getAnamneseByUserId} from "../controllers/anamneseController.js"
import verifyJWT from "../middlewares/Auth.js";

const anamneseRoutes = express.Router();

anamneseRoutes.post("/anamnese", createAnamnese)
anamneseRoutes.get("/anamnese/:userId", verifyJWT ,getAnamneseByUserId)
anamneseRoutes.delete("/anamnese/:id", verifyJWT, deleteAnamnese)
anamneseRoutes.put("/anamnese", verifyJWT, updateAnamnese)


export default anamneseRoutes;