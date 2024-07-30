import express from "express";
import { readAll, createUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/user', readAll);
userRoutes.post('/user', createUser);

export default userRoutes;