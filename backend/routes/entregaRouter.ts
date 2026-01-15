import { Router } from "express";

import {
  modifyEntrega,
  obtainEntrega,
  obtainEntregaById,
  createEntrega,
  removeEntrega,
  obtainDetallesEntregas,
} from "../controller/entregaController";
import { validateBody } from "../middleware/entregaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createEntrega);

router.get("/", obtainEntrega);

router.get("/:id", validateIdParams, obtainEntregaById);

router.get("/:id/detalles", validateIdParams, obtainDetallesEntregas);

router.put("/:id/", validateIdParams, validateFecha, modifyEntrega);

router.delete("/:id", validateIdParams, removeEntrega);

export default router;
