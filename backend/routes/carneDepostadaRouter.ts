import { Router } from "express";

import {
  createCarne,
  obtainCarne,
  obtainCarneById,
  modifyCarne,
  removeCarne,
} from "../controller/carneDepostadaController";
import { validateBody } from "../middleware/carneDepostadaMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createCarne);

router.get("/", obtainCarne);

router.get("/:id", validateIdParams, obtainCarneById);

router.put("/:id/", validateIdParams, validateBody, modifyCarne);

router.delete("/:id", validateIdParams, removeCarne);

export default router;
