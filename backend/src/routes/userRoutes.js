import express from "express";
import { readAll, createUser, readOne, updateUser, deleteUser, login } from "../controllers/userController.js";
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const userRoutes = express.Router();

userRoutes.get('/user/:id',verifyJWT, authorizeType("user"), readOne);
userRoutes.get('/user', readAll);
userRoutes.post('/user', createUser);
userRoutes.patch('/user/:id', verifyJWT, authorizeType("user"), updateUser);
userRoutes.delete('/user/:id', verifyJWT, authorizeType("user"), deleteUser);

userRoutes.post('/login', login);

export default userRoutes;