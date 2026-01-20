import { Router } from "express";

import {
  modifyReclamo,
  createReclamo,
  removeReclamo,
  obtainReclamoById,
  obtainReclamos,
} from "../controller/reclamoController";

import { validateBody } from "../middleware/reclamoMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createReclamo);

router.get("/", obtainReclamos);

router.get("/:id", validateIdParams, obtainReclamoById);

router.put("/:id/", validateIdParams, validateBody, modifyReclamo);

router.delete("/:id", validateIdParams, removeReclamo);

export default router;
