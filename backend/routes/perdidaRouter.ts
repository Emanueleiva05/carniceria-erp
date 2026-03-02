import { Router } from "express";
import {
  obtainPerdidaById,
  obtainPerdidas,
  createPerdida,
  removePerdida,
  modifyPerdida,
  obtainProductosPerdida,
  obtainPerdidaLastWeek,
  obtainPerdidaMonth,
} from "../controller/perdidaController";
import { validateBody } from "../middleware/perdidaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createPerdida);

router.get("/", obtainPerdidas);

router.get("/lastWeek", obtainPerdidaLastWeek);

router.get("/mounth", obtainPerdidaMonth);

router.get("/producto/:id", validateIdParams, obtainProductosPerdida);

router.get(
  "/:id",
  validateIdParams,
  validateBody,
  validateFecha,
  obtainPerdidaById,
);

router.put("/:id/", validateIdParams, modifyPerdida);

router.delete("/:id", validateIdParams, removePerdida);

export default router;
