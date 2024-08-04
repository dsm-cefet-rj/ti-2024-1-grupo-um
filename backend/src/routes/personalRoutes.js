import express from "express";
import { readAll, createPersonal, readOne, updatePersonal, deletePersonal, loginPersonal } from "../controllers/personalController.js";

const personalRoutes = express.Router();

personalRoutes.get('/personal/:id', readOne);
personalRoutes.get('/personal', readAll);
personalRoutes.post('/personal', createPersonal);
personalRoutes.put('/personal/:id', updatePersonal);
personalRoutes.delete('/personal/:id', deletePersonal);

personalRoutes.post('/loginPersonal', loginPersonal);

export default personalRoutes;