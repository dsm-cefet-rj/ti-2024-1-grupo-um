import express from "express";
import {createAnamnese, updateAnamnese, deleteAnamnese, getAnamneseByUserId} from "../controllers/anamneseController.js"
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";

const anamneseRoutes = express.Router();

anamneseRoutes.post("/anamnese", verifyJWT, authorizeTypes(["user"]), createAnamnese);
anamneseRoutes.get("/anamnese/:userId", verifyJWT, authorizeTypes(["user","personal"]), getAnamneseByUserId); //ambos devem ser capazes de visualizar anamnese do usuario -> modificar authorize type
anamneseRoutes.delete("/anamnese/:id", verifyJWT, deleteAnamnese);
anamneseRoutes.put("/anamnese", verifyJWT,  authorizeTypes(["user"]), updateAnamnese);


export default anamneseRoutes;