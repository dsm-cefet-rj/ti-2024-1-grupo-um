import express from "express";
import { createAluno, getAlunosByPersonalId, deleteAlunoByPersonalId, deleteAlunoByUserId } from "../controllers/alunoController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";

const alunoRoutes = express.Router();

alunoRoutes.post("/aluno", verifyJWT, authorizeTypes(["user"]),createAluno)
alunoRoutes.get("/aluno/:idPersonal", verifyJWT, authorizeTypes(["personal"]), getAlunosByPersonalId)
alunoRoutes.delete("/aluno/personal/:idPersonal", verifyJWT, authorizeTypes(["personal"]), deleteAlunoByPersonalId)
alunoRoutes.delete("/aluno/user/:userId", verifyJWT, authorizeTypes(["user"]), deleteAlunoByUserId)


export default alunoRoutes;