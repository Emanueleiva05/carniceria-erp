import { Router } from "express";
import {
  createProducto,
  modifyProducto,
  removeProducto,
  obtainProductoById,
  obtainProductos,
} from "../controller/productoController";

const router = Router();

router.post("/", createProducto);

router.get("/", obtainProductos);

router.get("/:id", obtainProductoById);

router.put("/:id/", modifyProducto);

router.delete("/:id", removeProducto);

export default router;
