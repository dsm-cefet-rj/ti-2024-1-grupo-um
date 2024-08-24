import express from "express";
import { readAllTrainings, readAll, readOne, createTraining, deleteTraining, deleteTrainingsByUserId } from "../controllers/trainingsController.js";
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/training", readAllTrainings);
trainingRoutes.get("/training/:userId",verifyJWT, readAll);
trainingRoutes.get("/training/one/:id", readOne);
trainingRoutes.post("/training", verifyJWT, authorizeType("user"),  createTraining);
trainingRoutes.post("training/:studentId", createTraining);
// trainingRoutes.put("/trainings/:id", updateTraining);
trainingRoutes.delete("/training/:trainingId", deleteTraining);
trainingRoutes.delete("/training/user", verifyJWT, authorizeType, deleteTrainingsByUserId);


export default trainingRoutes;