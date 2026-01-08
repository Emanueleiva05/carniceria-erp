import { Router } from "express";
import {
  obtainPerdidaById,
  obtainPerdidas,
  createPerdida,
  removePerdida,
  modifyPerdida,
} from "../controller/perdidaController";

const router = Router();

router.post("/", createPerdida);

router.get("/", obtainPerdidas);

router.get("/:id", obtainPerdidaById);

router.put("/:id/", modifyPerdida);

router.delete("/:id", removePerdida);

export default router;
