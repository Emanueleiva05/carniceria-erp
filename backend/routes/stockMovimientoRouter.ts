import { Router } from "express";
import {
  obtainMovimientoById,
  obtainMovimientos,
  removeMovimiento,
  modifyMovimiento,
  createMovimiento,
} from "../controller/stockMovimientoController";
import { validateBody } from "../middleware/stockMovimientoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMovimiento);

router.get("/", obtainMovimientos);

router.get("/:id", validateIdParams, obtainMovimientoById);

router.put("/:id/", validateIdParams, validateBody, modifyMovimiento);

router.delete("/:id", validateIdParams, removeMovimiento);

export default router;
