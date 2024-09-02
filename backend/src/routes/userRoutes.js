import express from "express";
import { readAll, createUser, readOne, updateUser, deleteUser, login, logout } from "../controllers/userController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";
import configMulter from "../../config/configMulter.js";
import multer from 'multer';

const userRoutes = express.Router();
const upload = multer(configMulter);

// userRoutes.get('/user/:id', verifyJWT, authorizeTypes(["user","personal"]), readOne);
userRoutes.get('/user/:id',  readOne);
userRoutes.get('/user', readAll);
userRoutes.post('/user', upload.single('image'), createUser);
userRoutes.patch('/user/:id',upload.single('image'), verifyJWT, authorizeTypes(["user"]), updateUser);
userRoutes.delete('/user/:id', verifyJWT, authorizeTypes(["user"]), deleteUser);

userRoutes.post('/login', login);
userRoutes.post('/logout', logout);

export default userRoutes;