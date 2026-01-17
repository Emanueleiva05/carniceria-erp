import { Router } from "express";
import {
  obtainMediares,
  obtainMediaresById,
  createMediares,
  modifyMediares,
  removeMediares,
  obtainCarnesMediares,
} from "../controller/mediaresController";
import { validateBody } from "../middleware/mediaresMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMediares);

router.get("/", obtainMediares);

router.get("/:id/carnes", validateIdParams, obtainCarnesMediares);

router.get("/:id", validateIdParams, obtainMediaresById);

router.put("/:id/", validateBody, validateIdParams, modifyMediares);

router.delete("/:id", validateIdParams, removeMediares);

export default router;
