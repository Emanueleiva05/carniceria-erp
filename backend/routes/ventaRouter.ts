import { Router } from "express";

import {
  createVenta,
  updateVenta,
  updateVendida,
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

router.put("/:id", validateIdParams, validateBody, validateFecha, updateVenta);

router.put("/:id/sold", validateIdParams, updateVendida);

router.delete("/:id", validateIdParams, deleteVenta);

router.get("/", getVentas);

router.get("/:id/details", validateIdParams, getDetallesByVenta);

router.get("/:id", validateIdParams, getVentaById);

export default router;
