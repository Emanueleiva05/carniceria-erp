import { Router } from "express";

import {
  createReclamo,
  updateReclamo,
  changeEstadoAceptado,
  changeEstadoRechazado,
  deleteReclamo,
  getReclamoById,
  getReclamoByProveedor,
  getReclamos,
} from "../controller/reclamoController";

import { validateBody } from "../middleware/reclamoMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createReclamo);

router.put("/:id/accept", validateIdParams, changeEstadoAceptado);

router.put("/:id/reject", validateIdParams, changeEstadoRechazado);

router.put("/:id", validateIdParams, validateBody, updateReclamo);

router.delete("/:id", validateIdParams, deleteReclamo);

router.get("/", getReclamos);

router.get("/:id/provider", validateIdParams, getReclamoByProveedor);

router.get("/:id", validateIdParams, getReclamoById);

export default router;
