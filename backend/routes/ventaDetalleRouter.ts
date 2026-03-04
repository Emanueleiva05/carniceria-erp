import { Router } from "express";
import {
  deleteVentaDetalle,
  updateCantidad,
  updateVentaDetalle,
  createVentaDetalle,
  getVentaDetalle,
  getVentaDetalleById,
} from "../controller/ventaDetalleController";
import { validateBody } from "../middleware/ventaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createVentaDetalle);

router.get("/", getVentaDetalle);

router.get("/:id", validateIdParams, getVentaDetalleById);

router.put("/:id/quantity", validateIdParams, updateCantidad);

router.put("/:id/", validateIdParams, validateBody, updateVentaDetalle);

router.delete("/:id", validateIdParams, deleteVentaDetalle);

export default router;
