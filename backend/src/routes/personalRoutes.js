import express from "express";
import { readAll, createPersonal, readOne, updatePersonal, deletePersonal, loginPersonal } from "../controllers/personalController.js";
import verifyJWT from "../middlewares/Auth.js";

const personalRoutes = express.Router();

personalRoutes.get('/personal/:_id', readOne);
personalRoutes.get('/personal', verifyJWT, readAll);
personalRoutes.post('/personal', createPersonal);
personalRoutes.put('/personal/:_id', updatePersonal);
personalRoutes.delete('/personal/:_id', deletePersonal);

personalRoutes.post('/loginPersonal', loginPersonal);

export default personalRoutes;