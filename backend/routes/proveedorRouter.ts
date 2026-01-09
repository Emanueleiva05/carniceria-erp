import { Router } from "express";

import {
  modifyProveedor,
  createProveedor,
  removeProveedor,
  obtainProveedorById,
  obtainProveedores,
} from "../controller/proveedorController";

import { validateBody } from "../middleware/proveedorMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProveedor);

router.get("/", obtainProveedores);

router.get("/:id", validateIdParams, obtainProveedorById);

router.put("/:id/", validateIdParams, validateBody, modifyProveedor);

router.delete("/:id", validateIdParams, removeProveedor);

export default router;
