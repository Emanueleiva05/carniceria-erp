import { Router } from "express";

import {
  modifyEntrega,
  obtainEntrega,
  obtainEntregaById,
  createEntrega,
  removeEntrega,
} from "../controller/entregaController";

const router = Router();

router.post("/", createEntrega);

router.get("/", obtainEntrega);

router.get("/:id", obtainEntregaById);

router.put("/:id/", modifyEntrega);

router.delete("/:id", removeEntrega);

export default router;
