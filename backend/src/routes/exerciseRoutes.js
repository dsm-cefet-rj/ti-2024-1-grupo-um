import express from "express";
import { getAllExercisesByTrainingId, createExercise, getAll, deleteExercise, deleteAllExercisesByTrainingId } from "../controllers/exercisesController.js";
import { verifyJWT, authorizeType } from "../middlewares/Auth.js";

const exerciseRoutes = express.Router();

// exerciseRoutes.use(verifyJWT);
exerciseRoutes.get("/exercise", getAll);
exerciseRoutes.get("/exercise/:trainingId", verifyJWT, authorizeType("user"), getAllExercisesByTrainingId);
exerciseRoutes.post("/exercise", verifyJWT, authorizeType("user"), createExercise);
exerciseRoutes.delete("/exercise", verifyJWT, authorizeType("user"), deleteAllExercisesByTrainingId);
exerciseRoutes.delete("/exercise/:exerciseId", verifyJWT, authorizeType("user"), deleteExercise);

//   "/exercise"
//req.params.id
//exerciseRoutes.put("/exercise/:luiz", funcao);

//exerciseRoutes.delete("/exercise", funcao);

export default exerciseRoutes;