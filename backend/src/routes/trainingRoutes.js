import express from "express";
import { readAllTrainings, readAll, readOne, createTraining } from "../controllers/trainingsController.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/trainings", readAllTrainings);
trainingRoutes.get("/trainings/:id", readAll);
trainingRoutes.get("/trainings/one/:id", readOne);
trainingRoutes.post("/trainings", createTraining);
// trainingRoutes.put("/trainings/:id", updateTraining);
// trainingRoutes.delete("/trainings/:id", deleteTraining);


export default trainingRoutes;