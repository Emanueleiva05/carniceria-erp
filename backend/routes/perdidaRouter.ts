import { Router } from "express";
import {
  createPerdida,
  updatePerdida,
  updateTirado,
  deletePerdida,
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

router.put("/:id", validateIdParams, updatePerdida);

router.put("/:id/discarded", validateIdParams, updateTirado);

router.delete("/:id", validateIdParams, deletePerdida);

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

export default router;
