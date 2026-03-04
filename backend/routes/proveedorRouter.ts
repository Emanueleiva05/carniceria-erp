import { Router } from "express";

import {
  updateProveedor,
  createProveedor,
  deleteProveedor,
  getEntregaByProveedor,
  getProveedorById,
  getProveedores,
} from "../controller/proveedorController";

import { validateBody } from "../middleware/proveedorMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProveedor);

router.get("/", getProveedores);

router.get("/:id", validateIdParams, getEntregaByProveedor);

router.get("/:id/delivery", validateIdParams, getProveedorById);

router.put("/:id", validateIdParams, validateBody, updateProveedor);

router.delete("/:id", validateIdParams, deleteProveedor);

export default router;
