import { Router } from "express";
import {
  createOferta,
  updateOferta,
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

router.get("/", getOfertas);

router.get("/active", getActiveOferta);

router.get("/producto/:id", validateIdParams, getProductosEnOferta);

router.get("/:id", validateIdParams, getOfertaById);

router.put("/:id", validateIdParams, validateBody, updateOferta);

router.delete("/:id", validateIdParams, deleteOferta);

export default router;
