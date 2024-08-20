import express from "express";
import { getAllExercisesByTrainingId, createExercise, getAll, deleteExercise, deleteAllExercisesByTrainingId } from "../controllers/exercisesController.js";
import verifyJWT from "../middlewares/Auth.js";

const exerciseRoutes = express.Router();

exerciseRoutes.use(verifyJWT);
// exerciseRoutes.get("/exercise", getAll);
exerciseRoutes.get("/exercise/:trainingId", getAllExercisesByTrainingId);
exerciseRoutes.post("/exercise",  createExercise);
exerciseRoutes.delete("/exercise", deleteAllExercisesByTrainingId);
exerciseRoutes.delete("/exercise/:exerciseId", deleteExercise);

//   "/exercise"
//req.params.id
//exerciseRoutes.put("/exercise/:luiz", funcao);

//exerciseRoutes.delete("/exercise", funcao);

export default exerciseRoutes;