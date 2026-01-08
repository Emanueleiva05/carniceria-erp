import { Router } from "express";
import {
  obtainMovimientoById,
  obtainMovimientos,
  removeMovimiento,
  modifyMovimiento,
  createMovimiento,
} from "../controller/stockMovimientoController";

const router = Router();

router.post("/", createMovimiento);

router.get("/", obtainMovimientos);

router.get("/:id", obtainMovimientoById);

router.put("/:id/", modifyMovimiento);

router.delete("/:id", removeMovimiento);

export default router;
