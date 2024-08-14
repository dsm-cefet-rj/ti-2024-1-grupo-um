import express from "express";
import { createAluno, getAlunosByPersonalId, deleteAlunoByPersonalId, deleteAlunoByUserId } from "../controllers/alunoController.js";
const alunoRoutes = express.Router();

alunoRoutes.post("/aluno", createAluno)
alunoRoutes.get("/aluno/:idPersonal", getAlunosByPersonalId)
alunoRoutes.delete("/aluno/personal/:idPersonal", deleteAlunoByPersonalId)
alunoRoutes.delete("/aluno/user/:userId", deleteAlunoByUserId)


export default alunoRoutes;