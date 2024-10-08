import express from "express";

import { readAll, createPersonal, readOne, updatePersonal, deletePersonal, loginPersonal, logoutPersonal } from "../controllers/personalController.js";
import { verifyJWT , authorizeTypes } from "../middlewares/Auth.js";
//import multer
import multer from 'multer'
import configMulter from "../../config/configMulter.js";
const personalRoutes = express.Router();
const upload = multer(configMulter); 

personalRoutes.get('/personal/:_id', verifyJWT, authorizeTypes(["personal"]), readOne);
personalRoutes.get('/personal', readAll);
personalRoutes.post('/personal', upload.single('image'), createPersonal);
personalRoutes.patch('/personal/:_id',upload.single('image'), verifyJWT, authorizeTypes(["personal"]), updatePersonal);
personalRoutes.delete('/personal/:_id',  verifyJWT, authorizeTypes(["personal"]),deletePersonal);

personalRoutes.post('/loginPersonal', loginPersonal);

export default personalRoutes;