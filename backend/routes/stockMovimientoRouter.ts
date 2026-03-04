import { Router } from "express";
import {
  deleteMovimiento,
  updateMovimiento,
  createMovimiento,
  getMovimientoById,
  getMovimientos,
} from "../controller/stockMovimientoController";
import { validateBody } from "../middleware/stockMovimientoMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMovimiento);

router.get("/", getMovimientos);

router.get("/:id", validateIdParams, getMovimientoById);

router.put("/:id", validateIdParams, validateBody, updateMovimiento);

router.delete("/:id", validateIdParams, deleteMovimiento);

export default router;
