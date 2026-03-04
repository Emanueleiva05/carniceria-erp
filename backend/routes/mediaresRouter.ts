import { Router } from "express";
import {
  getCarneByMediares,
  getMediares,
  createMediares,
  updateMediares,
  deleteMediares,
  getMediaresById,
} from "../controller/mediaresController";
import { validateBody } from "../middleware/mediaresMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMediares);

router.get("/", getMediares);

router.get("/:id/carnes", validateIdParams, getCarneByMediares);

router.get("/:id", validateIdParams, getMediaresById);

router.put("/:id/", validateBody, validateIdParams, updateMediares);

router.delete("/:id", validateIdParams, deleteMediares);

export default router;
