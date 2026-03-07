import { Router } from "express";

import {
  createEntrega,
  updateEntrega,
  updateFactura,
  updatePago,
  deleteEntrega,
  getDetallesByEntregas,
  getEntregas,
  getEntregaById,
} from "../controller/entregaController";
import { validateBody } from "../middleware/entregaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createEntrega);

router.put("/:id", validateIdParams, validateFecha, updateEntrega);

router.put("/:id/invoice", validateIdParams, updateFactura);

router.put("/:id/pay", validateIdParams, updatePago);

router.delete("/:id", validateIdParams, deleteEntrega);

router.get("/", getEntregas);

router.get("/:id", validateIdParams, getEntregaById);

router.get("/:id/details", validateIdParams, getDetallesByEntregas);

export default router;
