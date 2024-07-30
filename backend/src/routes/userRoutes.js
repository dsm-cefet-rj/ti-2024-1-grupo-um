import express from "express";
import { readAll, createUser, readOne, updateUser, deleteUser, login } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get('/user/:id', readOne);
userRoutes.get('/user', readAll);
userRoutes.post('/user', createUser);
userRoutes.put('/user/:id', updateUser);
userRoutes.delete('/user/:id', deleteUser);

userRoutes.post('/login', login);

export default userRoutes;