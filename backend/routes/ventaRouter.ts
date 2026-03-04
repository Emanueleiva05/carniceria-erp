import { Router } from "express";

import {
  createVenta,
  updateVenta,
  deleteVenta,
  getVentas,
  getDetallesByVenta,
  getVentaById,
} from "../controller/ventaController";
import { validateBody } from "../middleware/ventaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", createVenta);

router.get("/", getVentas);

router.get("/:id/details", validateIdParams, getDetallesByVenta);

router.get("/:id", validateIdParams, getVentaById);

router.put("/:id/", validateIdParams, validateBody, validateFecha, updateVenta);

router.delete("/:id", validateIdParams, deleteVenta);

export default router;
