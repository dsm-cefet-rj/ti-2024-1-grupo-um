import express from "express";
import { readAllTrainings, readAll, readOne, createTraining, deleteTraining } from "../controllers/trainingsController.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/training", readAllTrainings);
trainingRoutes.get("/training/:userId", readAll);
trainingRoutes.get("/training/one/:id", readOne);
trainingRoutes.post("/training", createTraining);
trainingRoutes.post("training/:studentId", createTraining)
// trainingRoutes.put("/trainings/:id", updateTraining);
trainingRoutes.delete("/training/:trainingId", deleteTraining);


export default trainingRoutes;