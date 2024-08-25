import express from "express";
import { readAllTrainings, readAll, readOne, createTraining, deleteTraining, deleteTrainingsByUserId } from "../controllers/trainingsController.js";
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/training", readAllTrainings);
trainingRoutes.get("/training/:userId",verifyJWT, authorizeType("user"), readAll); // personal deve ser capaz de ler tambem
trainingRoutes.get("/training/one/:id", verifyJWT, authorizeType("user"), readOne); // personal deve ser capaz de ler tambem
trainingRoutes.post("/training", verifyJWT, authorizeType("user"),  createTraining);
trainingRoutes.post("training/:studentId", verifyJWT, authorizeType("personal"), createTraining);
// trainingRoutes.put("/trainings/:id", updateTraining);
trainingRoutes.delete("/training/:trainingId", verifyJWT, authorizeType("user"), deleteTraining);
trainingRoutes.delete("/training/user", verifyJWT, authorizeType("user"), deleteTrainingsByUserId);


export default trainingRoutes;