import { Router } from "express";

import {
  modifyCarneReal,
  createCarneReal,
  removeCarneReal,
  obtainCarneRealById,
  obtainCarneReales,
} from "../controller/corteRealController";

import { validateBody } from "../middleware/corteRealMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCarneReal);

router.get("/", obtainCarneReales);

router.get("/:id", validateIdParams, obtainCarneRealById);

router.put("/:id/", validateIdParams, validateBody, modifyCarneReal);

router.delete("/:id", validateIdParams, removeCarneReal);

export default router;
