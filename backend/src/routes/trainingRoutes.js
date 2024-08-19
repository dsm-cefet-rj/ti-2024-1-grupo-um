import express from "express";
import { readAllTrainings, readAll, readOne, createTraining, deleteTraining } from "../controllers/trainingsController.js";
import verifyJWT from "../middlewares/Auth.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/training", readAllTrainings);
trainingRoutes.get("/training/:userId",verifyJWT, readAll);
trainingRoutes.get("/training/one/:id", readOne);
trainingRoutes.post("/training", verifyJWT, createTraining);
trainingRoutes.post("training/:studentId", createTraining)
// trainingRoutes.put("/trainings/:id", updateTraining);
trainingRoutes.delete("/training/:trainingId", deleteTraining);


export default trainingRoutes;