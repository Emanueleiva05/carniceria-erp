import { Router } from "express";

import {
  createVenta,
  obtainVentaById,
  obtainVentas,
  modifyVenta,
  removeVenta,
  obtainDetallesVenta,
} from "../controller/ventaController";
import { validateBody } from "../middleware/ventaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createVenta);

router.get("/", obtainVentas);

router.get("/:id/detalles", validateIdParams, obtainDetallesVenta);

router.get("/:id", validateIdParams, obtainVentaById);

router.put("/:id/", validateIdParams, validateBody, validateFecha, modifyVenta);

router.delete("/:id", validateIdParams, removeVenta);

export default router;
