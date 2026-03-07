import { Router } from "express";
import {
  createOferta,
  updateOferta,
  updateEstado,
  deleteOferta,
  getActiveOferta,
  getOfertaById,
  getOfertas,
  getProductosEnOferta,
} from "../controller/ofertaController";
import { validateBody } from "../middleware/ofertaMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createOferta);

router.put("/:id", validateIdParams, validateBody, updateOferta);

router.put("/:id/state", validateIdParams, updateEstado);

router.delete("/:id", validateIdParams, deleteOferta);

router.get("/", getOfertas);

router.get("/active", getActiveOferta);

router.get("/product/:id", validateIdParams, getProductosEnOferta);

router.get("/:id", validateIdParams, getOfertaById);

export default router;
