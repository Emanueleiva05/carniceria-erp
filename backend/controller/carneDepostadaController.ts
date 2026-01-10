import { NextFunction, Request, Response } from "express";
import {
  deleteCarne,
  getCarneById,
  getCarnes,
  setCarne,
  updateCarne,
} from "../services/carneDepostadaService";

export const createCarne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setCarne(data);

    res.status(202).json({ message: "Carne creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyCarne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateCarne(id, data);

    res.status(202).json({ message: "Carne modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeCarne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteCarne(id);

    res.status(202).json({ message: "Carne eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainCarneById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const carne = await getCarneById(id);

    res.status(202).json(carne);
  } catch (err) {
    next(err);
  }
};

export const obtainCarne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const carnes = await getCarnes();

    res.status(202).json(carnes);
  } catch (err) {
    next(err);
  }
};
