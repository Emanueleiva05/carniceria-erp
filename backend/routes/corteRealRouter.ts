import { Router } from "express";

import {
  updateCorteReal,
  createCorteReal,
  deleteCorteReal,
  getCorteRealById,
  getCorteReales,
} from "../controller/corteRealController";

import { validateBody } from "../middleware/corteRealMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCorteReal);

router.get("/", getCorteReales);

router.get("/:id", validateIdParams, getCorteRealById);

router.put("/:id", validateIdParams, validateBody, updateCorteReal);

router.delete("/:id", validateIdParams, deleteCorteReal);

export default router;
