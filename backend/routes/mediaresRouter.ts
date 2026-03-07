import { Router } from "express";
import {
  createMediares,
  updateMediares,
  updatePesoCarton,
  updatePesoReal,
  updatePrecioCompra,
  deleteMediares,
  getCarneByMediares,
  getMediares,
  getMediaresById,
} from "../controller/mediaresController";
import { validateBody } from "../middleware/mediaresMiddleware";
import { validateIdParams } from "../middleware/genericMiddleware";

const router = Router();

router.post("/", validateBody, createMediares);

router.put("/:id", validateBody, validateIdParams, updateMediares);

router.put("/:id/weight", validateIdParams, updatePesoCarton);

router.put("/:id/realweight", validateIdParams, updatePesoReal);

router.put("/:id/price", validateIdParams, updatePrecioCompra);

router.delete("/:id", validateIdParams, deleteMediares);

router.get("/", getMediares);

router.get("/:id/meat", validateIdParams, getCarneByMediares);

router.get("/:id", validateIdParams, getMediaresById);

export default router;
