import { Request, Response, NextFunction } from "express";
import {
  deleteMediares,
  getMediares,
  getMediaresById,
  setMediares,
  updateMediares,
} from "../services/mediaresService";

export const createMediares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setMediares(data);

    res.status(202).json({ message: "Mediares creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyMediares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateMediares(id, data);

    res.status(202).json({ message: "Mediares modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeMediares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteMediares(id);

    res.status(202).json({ message: "Mediares eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainMediaresById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const mediares = await getMediaresById(id);

    res.status(202).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const obtainMediares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mediares = await getMediares();

    res.status(202).json(mediares);
  } catch (err) {
    next(err);
  }
};
