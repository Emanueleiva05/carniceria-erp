import { Request, Response, NextFunction } from "express";
import {
  deleteReclamo,
  updateReclamo,
  setReclamo,
  getReclamoById,
  getReclamos,
} from "../services/reclamoService";

export const createReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const reclamo = await setReclamo(data);

    res.status(202).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const modifyReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const reclamo = await updateReclamo(id, data);

    res.status(202).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const removeReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await deleteReclamo(id);

    res.status(202).json({ message: "Reclamo eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainReclamoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const reclamo = await getReclamoById(id);

    res.status(202).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const obtainReclamos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reclamos = await getReclamos();

    res.status(202).json(reclamos);
  } catch (err) {
    next(err);
  }
};
