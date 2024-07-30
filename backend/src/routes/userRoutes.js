import express from "express";
import { readAll } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/user', readAll);

export default userRoutes;