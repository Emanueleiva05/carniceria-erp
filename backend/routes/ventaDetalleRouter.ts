import { Router } from "express";
import {
  obtainVentaDetalle,
  obtainVentaDetalleById,
  removeVentaDetalle,
  modifyVentaDetalle,
  createVentaDetalle,
} from "../controller/ventaDetalleController";

const router = Router();

router.post("/", createVentaDetalle);

router.get("/", obtainVentaDetalle);

router.get("/:id", obtainVentaDetalleById);

router.put("/:id/", modifyVentaDetalle);

router.delete("/:id", removeVentaDetalle);

export default router;
