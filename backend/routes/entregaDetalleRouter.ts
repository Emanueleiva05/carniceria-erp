import { Router } from "express";
import {
  obtainEntregaDetalleById,
  obtainEntregaDetalles,
  removeEntregaDetalle,
  modifyEntregaDetalle,
  createEntregaDetalle,
} from "../controller/entregaDetalleController";
import { validateBody } from "../middleware/entregaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createEntregaDetalle);

router.get("/", obtainEntregaDetalles);

router.get("/:id", validateIdParams, obtainEntregaDetalleById);

router.put("/:id/", validateIdParams, validateBody, modifyEntregaDetalle);

router.delete("/:id", validateIdParams, removeEntregaDetalle);

export default router;
