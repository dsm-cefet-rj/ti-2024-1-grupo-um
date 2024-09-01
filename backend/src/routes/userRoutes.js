import express from "express";
import { readAll, createUser, readOne, updateUser, deleteUser, login, logout } from "../controllers/userController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";

const userRoutes = express.Router();

userRoutes.get('/user/:id',verifyJWT, authorizeTypes(["user"]), readOne);
userRoutes.get('/user', readAll);
userRoutes.post('/user', createUser);
userRoutes.patch('/user/:id', verifyJWT, authorizeTypes(["user"]), updateUser);
userRoutes.delete('/user/:id', verifyJWT, authorizeTypes(["user"]), deleteUser);

userRoutes.post('/login', login);
userRoutes.post('/logout', verifyJWT, logout);

export default userRoutes;