import express from "express";

const exerciseRoutes = express.Router();

exerciseRoutes.get("/exercise", (req, res) =>  res.status(200).send({message: "rota get exercises"}));
exerciseRoutes.get("/exercise/:trainingId", (req, res) => res.status(200).send({message:"rota get all by training id"}));
exerciseRoutes.post("/exercise", (req, res) => console.log(req.body));
//   "/exercise"
//req.params.id
//exerciseRoutes.put("/exercise/:luiz", funcao);

//exerciseRoutes.delete("/exercise", funcao);

export default exerciseRoutes;