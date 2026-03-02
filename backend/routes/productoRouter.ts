import { Router } from "express";
import {
  createProducto,
  modifyProducto,
  modifyPrecio,
  modifyPrecioByCategoria,
  removeProducto,
  obtainProductoById,
  obtainProductos,
  obtainProductoByCategoria,
} from "../controller/productoController";
import { validateBody } from "../middleware/productoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProducto);

router.get("/", obtainProductos);

router.get("/categoria/:data", obtainProductoByCategoria);

router.get("/:id", validateIdParams, obtainProductoById);

router.put("/categoria/precio", modifyPrecioByCategoria);

router.put("/:id/precio", validateIdParams, modifyPrecio);

router.put("/:id/", validateIdParams, validateBody, modifyProducto);

router.delete("/:id", validateIdParams, removeProducto);

export default router;
