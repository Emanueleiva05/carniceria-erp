import { Router } from "express";

import {
  createProveedor,
  updateProveedor,
  deleteProveedor,
  getEntregaByProveedor,
  getProveedorById,
  getProveedores,
} from "../controller/proveedorController";

import { validateBody } from "../middleware/proveedorMiddleware";

import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProveedor);

router.put("/:id", validateIdParams, validateBody, updateProveedor);

router.delete("/:id", validateIdParams, deleteProveedor);

router.get("/", getProveedores);

router.get("/:id", validateIdParams, getProveedorById);

router.get("/:id/delivery", validateIdParams, getEntregaByProveedor);

export default router;
