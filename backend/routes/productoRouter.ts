import { Router } from "express";
import {
  createProducto,
  modifyProducto,
  removeProducto,
  obtainProductoById,
  obtainProductos,
} from "../controller/productoController";
import { validateBody } from "../middleware/productoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProducto);

router.get("/", obtainProductos);

router.get("/:id", validateIdParams, obtainProductoById);

router.put("/:id/", validateIdParams, validateBody, modifyProducto);

router.delete("/:id", validateIdParams, removeProducto);

export default router;
