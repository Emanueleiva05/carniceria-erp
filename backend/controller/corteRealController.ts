import { Request, Response, NextFunction } from "express";
import {
  setCarneReal,
  updateCarneReal,
  getCarneReales,
  getCarneRealById,
  deleteCarneReal,
} from "../services/corteRealService";

export const createCarneReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const carne = await setCarneReal(data);

    res.status(202).json(carne);
  } catch (err) {
    next(err);
  }
};

export const modifyCarneReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const carne = await updateCarneReal(id, data);

    res.status(202).json(carne);
  } catch (err) {
    next(err);
  }
};

export const removeCarneReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await deleteCarneReal(id);

    res.status(202).json({ message: "Carne real eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainCarneRealById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const carne = await getCarneRealById(id);

    res.status(202).json(carne);
  } catch (err) {
    next(err);
  }
};

export const obtainCarneReales = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const carnes = await getCarneReales();

    res.status(202).json(carnes);
  } catch (err) {
    next(err);
  }
};
