import { Router } from "express";
import {
  obtainOfertaById,
  obtainOfertas,
  createOferta,
  modifyOferta,
  removeOferta,
} from "../controller/ofertaController";

const router = Router();

router.post("/", createOferta);

router.get("/", obtainOfertas);

router.get("/:id", obtainOfertaById);

router.put("/:id/", modifyOferta);

router.delete("/:id", removeOferta);

export default router;
