import { Router } from "express";

import {
  modifyProveedor,
  createProveedor,
  removeProveedor,
  obtainProveedorById,
  obtainProveedores,
  obtainEntregaByProveedor,
} from "../controller/proveedorController";

import { validateBody } from "../middleware/proveedorMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProveedor);

router.get("/", obtainProveedores);

router.get("/:id", validateIdParams, obtainProveedorById);

router.get("/:id/entregas", validateIdParams, obtainEntregaByProveedor);

router.put("/:id/", validateIdParams, validateBody, modifyProveedor);

router.delete("/:id", validateIdParams, removeProveedor);

export default router;
