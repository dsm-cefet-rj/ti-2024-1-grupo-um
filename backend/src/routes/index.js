import express from "express";
import userRoutes from "./userRoutes.js";
import anamneseRoutes from "./anamneseRoutes.js";
import trainingRoutes from "./trainingRoutes.js";
import personalRoutes from "./personalRoutes.js";

const routes = express.Router();

routes.use(userRoutes);
routes.use(anamneseRoutes);
routes.use(trainingRoutes);
routes.use(personalRoutes);

export default routes;