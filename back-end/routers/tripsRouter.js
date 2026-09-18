import tripsController from "../controller/tripsController.js";
import express from "express";

const tripsRouter = express.Router();

//INDEX
tripsRouter.get("/", tripsController.index);

//SHOW
tripsRouter.get("/:id", tripsController.show);

export default tripsRouter;
