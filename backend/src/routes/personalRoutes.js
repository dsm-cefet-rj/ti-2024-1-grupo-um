import express from "express";
import { readAll, createPersonal, readOne, updatePersonal, deletePersonal, loginPersonal } from "../controllers/personalController.js";
import { verifyJWT , authorizeTypes } from "../middlewares/Auth.js";

const personalRoutes = express.Router();

personalRoutes.get('/personal/:_id', verifyJWT, authorizeTypes(["personal"]), readOne);
personalRoutes.get('/personal', readAll);
personalRoutes.post('/personal', createPersonal);
personalRoutes.patch('/personal/:_id', verifyJWT, authorizeTypes(["personal"]), updatePersonal);
personalRoutes.delete('/personal/:_id',  verifyJWT, authorizeTypes(["personal"]),deletePersonal);

personalRoutes.post('/loginPersonal', loginPersonal);

export default personalRoutes;