import express from "express";
import { readAll, createUser, readOne, updateUser, deleteUser, login } from "../controllers/userController.js";
import verifyJWT from "../middlewares/Auth.js";

const userRoutes = express.Router();

userRoutes.get('/user/:id',verifyJWT, readOne);
userRoutes.get('/user', readAll);
userRoutes.post('/user', createUser);
userRoutes.put('/user/:id', verifyJWT, updateUser);
userRoutes.delete('/user/:id', verifyJWT, deleteUser);

userRoutes.post('/login', login);

export default userRoutes;