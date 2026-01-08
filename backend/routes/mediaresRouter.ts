import { Router } from "express";
import {
  obtainMediares,
  obtainMediaresById,
  createMediares,
  modifyMediares,
  removeMediares,
} from "../controller/mediaresController";

const router = Router();

router.post("/", createMediares);

router.get("/", obtainMediares);

router.get("/:id", obtainMediaresById);

router.put("/:id/", modifyMediares);

router.delete("/:id", removeMediares);

export default router;
