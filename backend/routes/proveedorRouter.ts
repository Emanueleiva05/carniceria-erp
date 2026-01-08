import { Router } from "express";

import {
  modifyProveedor,
  createProveedor,
  removeProveedor,
  obtainProveedorById,
  obtainProveedores,
} from "../controller/proveedorController";

const router = Router();

router.post("/", createProveedor);

router.get("/", obtainProveedores);

router.get("/:id", obtainProveedorById);

router.put("/:id/", modifyProveedor);

router.delete("/:id", removeProveedor);

export default router;
