import express from "express";
import { readAllTrainings, readAll, readOne, createTraining, deleteTraining, deleteTrainingsByUserId } from "../controllers/trainingsController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";

const trainingRoutes = express.Router();


trainingRoutes.get("/training", readAllTrainings);
trainingRoutes.get("/training/:userId",verifyJWT, authorizeTypes(["user","personal"]), readAll); // personal deve ser capaz de ler tambem
trainingRoutes.get("/training/one/:id", verifyJWT, authorizeTypes(["user", "personal"]), readOne); // personal deve ser capaz de ler tambem
trainingRoutes.post("/training", verifyJWT, authorizeTypes(["user"]),  createTraining);
trainingRoutes.post("training/:studentId", verifyJWT, authorizeTypes(["personal"]), createTraining);
// trainingRoutes.put("/trainings/:id", updateTraining);
trainingRoutes.delete("/training/:trainingId", verifyJWT, authorizeTypes(["user"]), deleteTraining);
trainingRoutes.delete("/training/user", verifyJWT, authorizeTypes(["user"]), deleteTrainingsByUserId);


export default trainingRoutes;