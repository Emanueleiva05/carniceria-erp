import { Router } from "express";
import {
  createEntregaDetalle,
  updateEntregaDetalle,
  updateCantidad,
  updatePrecio,
  deleteEntregaDetalle,
  getEntregaDetalleById,
  getEntregaDetalles,
} from "../controller/entregaDetalleController";
import { validateBody } from "../middleware/entregaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createEntregaDetalle);

router.put("/:id", validateIdParams, validateBody, updateEntregaDetalle);

router.put("/:id/price", validateIdParams, updatePrecio);

router.put("/:id/quantity", validateIdParams, updateCantidad);

router.delete("/:id", validateIdParams, deleteEntregaDetalle);

router.get("/", getEntregaDetalles);

router.get("/:id", validateIdParams, getEntregaDetalleById);

export default router;
