import { Router } from "express";
import {
  getEntregaDetalleById,
  getEntregaDetalles,
  deleteEntregaDetalle,
  updateEntregaDetalle,
  createEntregaDetalle,
} from "../controller/entregaDetalleController";
import { validateBody } from "../middleware/entregaDetalleMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createEntregaDetalle);

router.get("/", getEntregaDetalles);

router.get("/:id", validateIdParams, getEntregaDetalleById);

router.put("/:id", validateIdParams, validateBody, updateEntregaDetalle);

router.delete("/:id", validateIdParams, deleteEntregaDetalle);

export default router;
