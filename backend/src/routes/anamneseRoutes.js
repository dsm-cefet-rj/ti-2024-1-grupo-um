import express from "express";
import {createAnamnese, updateAnamnese, deleteAnamnese, getAnamneseByUserId} from "../controllers/anamneseController.js"
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const anamneseRoutes = express.Router();

anamneseRoutes.post("/anamnese", verifyJWT, authorizeType("user"), createAnamnese);
anamneseRoutes.get("/anamnese/:userId", verifyJWT, authorizeType("user"), getAnamneseByUserId); //ambos devem ser capazes de visualizar anamnese do usuario -> modificar authorize type
anamneseRoutes.delete("/anamnese/:id", verifyJWT, deleteAnamnese);
anamneseRoutes.put("/anamnese", verifyJWT,  authorizeType("user"), updateAnamnese);


export default anamneseRoutes;