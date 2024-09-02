import express from "express";
import { createAluno, getAlunosByPersonalId, deleteAlunoByPersonalId, deleteAlunoByUserId } from "../controllers/alunoController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";
import multer from 'multer';
import configMulter from "../../config/configMulter.js";

const alunoRoutes = express.Router();
const upload = multer(configMulter);

alunoRoutes.post("/aluno",upload.single('userImage'), verifyJWT, authorizeTypes(["user"]),createAluno)
alunoRoutes.get("/aluno/:idPersonal", getAlunosByPersonalId)
alunoRoutes.delete("/aluno/personal/:idPersonal", verifyJWT, authorizeTypes(["personal"]), deleteAlunoByPersonalId)
alunoRoutes.delete("/aluno/user/:userId", verifyJWT, authorizeTypes(["user"]), deleteAlunoByUserId)


export default alunoRoutes;