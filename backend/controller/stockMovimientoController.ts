import { Request, Response, NextFunction } from "express";
import {
  deleteMovimiento,
  getMovimientoById,
  getMovimiento,
  setMovimiento,
  updateMovimiento,
} from "../services/stockMovimientoServices";

export const createMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setMovimiento(data);

    res.status(202).json({ message: "Movimiento creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateMovimiento(id, data);

    res.status(202).json({ message: "Movimiento modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteMovimiento(id);

    res.status(202).json({ message: "Movimiento eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainMovimientoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const movimiento = await getMovimientoById(id);

    res.status(202).json(movimiento);
  } catch (err) {
    next(err);
  }
};

export const obtainMovimientos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movimientos = await getMovimiento();

    res.status(202).json(movimientos);
  } catch (err) {
    next(err);
  }
};
