import { Router } from "express";
import {
  obtainEntregaDetalleById,
  obtainEntregaDetalles,
  removeEntregaDetalle,
  modifyEntregaDetalle,
  createEntregaDetalle,
} from "../controller/entregaDetalleController";

const router = Router();

router.post("/", createEntregaDetalle);

router.get("/", obtainEntregaDetalles);

router.get("/:id", obtainEntregaDetalleById);

router.put("/:id/", modifyEntregaDetalle);

router.delete("/:id", removeEntregaDetalle);

export default router;
