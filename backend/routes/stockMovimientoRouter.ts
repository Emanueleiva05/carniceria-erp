import { Router } from "express";
import {
  createMovimiento,
  updateMovimiento,
  deleteMovimiento,
  getMovimientoById,
  getMovimientos,
} from "../controller/stockMovimientoController";
import { validateBody } from "../middleware/stockMovimientoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMovimiento);

router.put("/:id", validateIdParams, validateBody, updateMovimiento);

router.delete("/:id", validateIdParams, deleteMovimiento);

router.get("/", getMovimientos);

router.get("/:id", validateIdParams, getMovimientoById);

export default router;
