import { Router } from "express";

import {
  updateEntrega,
  getDetallesByEntregas,
  getEntregas,
  createEntrega,
  deleteEntrega,
  getEntregaById,
} from "../controller/entregaController";
import { validateBody } from "../middleware/entregaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createEntrega);

router.get("/", getEntregas);

router.get("/:id", validateIdParams, getEntregaById);

router.get("/:id/detalles", validateIdParams, getDetallesByEntregas);

router.put("/:id/", validateIdParams, validateFecha, updateEntrega);

router.delete("/:id", validateIdParams, deleteEntrega);

export default router;
