import { Router } from "express";
import {
  obtainOfertaById,
  obtainOfertas,
  createOferta,
  modifyOferta,
  removeOferta,
  obtainActiveOferta,
  obtainProductosEnOferta,
} from "../controller/ofertaController";
import { validateBody } from "../middleware/ofertaMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createOferta);

router.get("/", obtainOfertas);

router.get("/active", obtainActiveOferta);

router.get("/producto/:id", validateIdParams, obtainProductosEnOferta);

router.get("/:id", validateIdParams, obtainOfertaById);

router.put("/:id", validateIdParams, validateBody, modifyOferta);

router.delete("/:id", validateIdParams, removeOferta);

export default router;
