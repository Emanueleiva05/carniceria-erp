import { Router } from "express";

import {
  modifyReclamo,
  createReclamo,
  removeReclamo,
  obtainReclamoById,
  obtainReclamos,
  changeEstadoAceptado,
  changeEstadoRechazado,
} from "../controller/reclamoController";

import { validateBody } from "../middleware/reclamoMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createReclamo);

router.get("/", obtainReclamos);

router.get("/:id", validateIdParams, obtainReclamoById);

router.put("/:id/aceptar", validateIdParams, changeEstadoAceptado);

router.put("/:id/aceptar", validateIdParams, changeEstadoRechazado);

router.put("/:id/", validateIdParams, validateBody, modifyReclamo);

router.delete("/:id", validateIdParams, removeReclamo);

export default router;
