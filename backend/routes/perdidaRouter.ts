import { Router } from "express";
import {
  createPerdida,
  deletePerdida,
  updatePerdida,
  getPerdidaById,
  getPerdidaByMonth,
  getPerdidaLastWeek,
  getPerdidas,
  getProductosPerdidos,
} from "../controller/perdidaController";
import { validateBody } from "../middleware/perdidaMiddleware";
import {
  validateFecha,
  validateIdParams,
} from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, validateFecha, createPerdida);

router.get("/", getPerdidas);

router.get("/lastWeek", getPerdidaLastWeek);

router.get("/mounth", getPerdidaByMonth);

router.get("/product/:id", validateIdParams, getProductosPerdidos);

router.get(
  "/:id",
  validateIdParams,
  validateBody,
  validateFecha,
  getPerdidaById,
);

router.put("/:id", validateIdParams, updatePerdida);

router.delete("/:id", validateIdParams, deletePerdida);

export default router;
