import express from "express";
import userRoutes from "./userRoutes.js";
import anamneseRoutes from "./anamneseRoutes.js";
import trainingRoutes from "./trainingRoutes.js";

const routes = express.Router();

routes.use(userRoutes);
routes.use(anamneseRoutes);
routes.use(trainingRoutes);

export default routes;