import express from "express";
import { createAluno, getAlunosByPersonalId, deleteAlunoByPersonalId, deleteAlunoByUserId } from "../controllers/alunoController";
const alunoRoutes = express.Router();

alunoRoutes.post("/aluno", createAluno)
alunoRoutes.get("/aluno/:idPersonal", getAlunosByPersonalId)
alunoRoutes.delete("/aluno/:idPersonal", deleteAlunoByPersonalId)
alunoRoutes.delete("/aluno/:idUser", deleteAlunoByUserId)


export default alunoRoutes;