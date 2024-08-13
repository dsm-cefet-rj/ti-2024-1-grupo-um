import express from "express";
import userRoutes from "./userRoutes.js";
import anamneseRoutes from "./anamneseRoutes.js";
import trainingRoutes from "./trainingRoutes.js";
import personalRoutes from "./personalRoutes.js";
import exerciseRoutes from "./exerciseRoutes.js";
import alunoRoutes from "./alunoRoutes.js";

const routes = express.Router();

routes.use(userRoutes);
routes.use(anamneseRoutes);
routes.use(trainingRoutes);
routes.use(personalRoutes);
routes.use(exerciseRoutes);
routes.use(alunoRoutes);

export default routes;