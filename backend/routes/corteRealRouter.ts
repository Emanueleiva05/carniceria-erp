import { Router } from "express";

import {
  createCorteReal,
  updateCorteReal,
  updatePeso,
  deleteCorteReal,
  getCorteRealById,
  getCorteReales,
} from "../controller/corteRealController";

import { validateBody } from "../middleware/corteRealMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCorteReal);

router.put("/:id", validateIdParams, validateBody, updateCorteReal);

router.put("/:id/weight", validateIdParams, updatePeso);

router.delete("/:id", validateIdParams, deleteCorteReal);

router.get("/", getCorteReales);

router.get("/:id", validateIdParams, getCorteRealById);

export default router;
