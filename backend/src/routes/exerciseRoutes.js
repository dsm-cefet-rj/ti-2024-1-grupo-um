import express from "express";
import { getAllExercisesByTrainingId, createExercise, getAll, deleteExercise, deleteAllExercisesByTrainingId } from "../controllers/exercisesController.js";
import { verifyJWT, authorizeTypes } from "../middlewares/Auth.js";

const exerciseRoutes = express.Router();

// exerciseRoutes.use(verifyJWT);
exerciseRoutes.get("/exercise", getAll);
exerciseRoutes.get("/exercise/:trainingId", verifyJWT, authorizeTypes(["user"]), getAllExercisesByTrainingId);
exerciseRoutes.post("/exercise", verifyJWT, authorizeTypes(["user"]), createExercise);
exerciseRoutes.delete("/exercise", verifyJWT, authorizeTypes(["user"]), deleteAllExercisesByTrainingId);
exerciseRoutes.delete("/exercise/:exerciseId", verifyJWT, authorizeTypes(["user"]), deleteExercise);

//   "/exercise"
//req.params.id
//exerciseRoutes.put("/exercise/:luiz", funcao);

//exerciseRoutes.delete("/exercise", funcao);

export default exerciseRoutes;