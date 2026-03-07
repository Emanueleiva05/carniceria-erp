import { Router } from "express";
import {
  createProducto,
  updatePrecioByCategoria,
  updateProducto,
  updatePrecioVenta,
  updateCantidad,
  deleteProducto,
  getProductoByCategoria,
  getProductoById,
  getProductos,
} from "../controller/productoController";
import { validateBody } from "../middleware/productoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createProducto);

router.put("/category/price", updatePrecioByCategoria);

router.put("/:id/price", validateIdParams, updatePrecioVenta);

router.put("/:id/quantity", validateIdParams, updateCantidad);

router.put("/:id", validateIdParams, validateBody, updateProducto);

router.delete("/:id", validateIdParams, deleteProducto);

router.get("/", getProductos);

router.get("/category/:data", getProductoByCategoria);

router.get("/:id", validateIdParams, getProductoById);

export default router;
