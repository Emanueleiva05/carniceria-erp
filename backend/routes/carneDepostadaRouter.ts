import { Router } from "express";

import {
  createCarne,
  obtainCarne,
  obtainCarneById,
  modifyCarne,
  removeCarne,
} from "../controller/carneDepostadaController";

const router = Router();

router.post("/", createCarne);

router.get("/", obtainCarne);

router.get("/:id", obtainCarneById);

router.put("/:id/", modifyCarne);

router.delete("/:id", removeCarne);

export default router;
