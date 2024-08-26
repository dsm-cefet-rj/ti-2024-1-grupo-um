import express from "express";
import { readAll, createPersonal, readOne, updatePersonal, deletePersonal, loginPersonal } from "../controllers/personalController.js";
import { verifyJWT , authorizeType } from "../middlewares/Auth.js";

const personalRoutes = express.Router();

personalRoutes.get('/personal/:_id', verifyJWT, authorizeType("personal"), readOne);
personalRoutes.get('/personal', readAll);
personalRoutes.post('/personal', createPersonal);
personalRoutes.patch('/personal/:_id', verifyJWT, authorizeType("personal"), updatePersonal);
personalRoutes.delete('/personal/:_id',  verifyJWT, authorizeType("personal"),deletePersonal);

personalRoutes.post('/loginPersonal', loginPersonal);

export default personalRoutes;