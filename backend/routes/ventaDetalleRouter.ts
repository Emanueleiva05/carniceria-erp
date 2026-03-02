import { Router } from "express";
import {
  obtainVentaDetalle,
  obtainVentaDetalleById,
  removeVentaDetalle,
  modifyVentaDetalle,
  createVentaDetalle,
  modifyCantidad,
} from "../controller/ventaDetalleController";
import { validateBody } from "../middleware/ventaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createVentaDetalle);

router.get("/", obtainVentaDetalle);

router.get("/:id", validateIdParams, obtainVentaDetalleById);

router.put("/:id/cantidad", validateIdParams, modifyCantidad);

router.put("/:id/", validateIdParams, validateBody, modifyVentaDetalle);

router.delete("/:id", validateIdParams, removeVentaDetalle);

export default router;
