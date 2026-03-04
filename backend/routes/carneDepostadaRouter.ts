import { Router } from "express";

import {
  createCarne,
  getCarnes,
  getCarneById,
  updateCarne,
  deleteCarne,
} from "../controller/carneDepostadaController";
import { validateBody } from "../middleware/carneDepostadaMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCarne);

router.get("/", getCarnes);

router.get("/:id", validateIdParams, getCarneById);

router.put("/:id", validateIdParams, validateBody, updateCarne);

router.delete("/:id", validateIdParams, deleteCarne);

export default router;
