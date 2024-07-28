import express from "express";
import userRoutes from "./userRoutes.js";
import anamneseRoutes from "./anamneseRoutes.js";

const routes = express.Router();

routes.use(userRoutes);
routes.use(anamneseRoutes);

export default routes;