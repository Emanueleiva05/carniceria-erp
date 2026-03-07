import { Router } from "express";

import {
  createCarne,
  updateCarne,
  updatePeso,
  deleteCarne,
  getCarnes,
  getCarneById,
} from "../controller/carneDepostadaController";
import { validateBody } from "../middleware/carneDepostadaMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCarne);

router.put("/:id", validateIdParams, validateBody, updateCarne);

router.put("/:id/weight", validateIdParams, updatePeso);

router.delete("/:id", validateIdParams, deleteCarne);

router.get("/", getCarnes);

router.get("/:id", validateIdParams, getCarneById);

export default router;
