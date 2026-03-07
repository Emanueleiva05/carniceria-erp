import { Router } from "express";
import {
  createVentaDetalle,
  updateCantidad,
  updateVentaDetalle,
  updatePrecio,
  deleteVentaDetalle,
  getVentaDetalle,
  getVentaDetalleById,
} from "../controller/ventaDetalleController";
import { validateBody } from "../middleware/ventaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createVentaDetalle);

router.put("/:id/quantity", validateIdParams, updateCantidad);

router.put("/:id/price", validateIdParams, updatePrecio);

router.put("/:id", validateIdParams, validateBody, updateVentaDetalle);

router.delete("/:id", validateIdParams, deleteVentaDetalle);

router.get("/", getVentaDetalle);

router.get("/:id", validateIdParams, getVentaDetalleById);

export default router;
