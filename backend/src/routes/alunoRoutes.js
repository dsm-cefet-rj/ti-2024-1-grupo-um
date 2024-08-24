import express from "express";
import { createAluno, getAlunosByPersonalId, deleteAlunoByPersonalId, deleteAlunoByUserId } from "../controllers/alunoController.js";
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const alunoRoutes = express.Router();

alunoRoutes.post("/aluno", verifyJWT,createAluno)
alunoRoutes.get("/aluno/:idPersonal", getAlunosByPersonalId)
alunoRoutes.delete("/aluno/personal/:idPersonal", deleteAlunoByPersonalId)
alunoRoutes.delete("/aluno/user/:userId", deleteAlunoByUserId)


export default alunoRoutes;