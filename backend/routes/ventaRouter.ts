import { Router } from "express";

import {
  createVenta,
  obtainVentaById,
  obtainVentas,
  modifyVenta,
  removeVenta,
} from "../controller/ventaController";

const router = Router();

router.post("/", createVenta);

router.get("/", obtainVentas);

router.get("/:id", obtainVentaById);

router.put("/:id/", modifyVenta);

router.delete("/:id", removeVenta);

export default router;
