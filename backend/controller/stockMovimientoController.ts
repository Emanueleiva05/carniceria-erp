import { Request, Response, NextFunction } from "express";
import * as movimientoService from "../services/stockMovimientoServices";

export const createMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const movimiento = await movimientoService.createMovimiento(data);

    res.status(201).json(movimiento);
  } catch (err) {
    next(err);
  }
};

export const updateMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const movimiento = await movimientoService.updateMovimiento(id, data);

    res.status(200).json(movimiento);
  } catch (err) {
    next(err);
  }
};

export const deleteMovimiento = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await movimientoService.deleteMovimiento(id);

    res.status(204).json({ message: "Movimiento eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getMovimientoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const movimiento = await movimientoService.getMovimientoById(id);

    res.status(200).json(movimiento);
  } catch (err) {
    next(err);
  }
};

export const getMovimientos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const movimientos = await movimientoService.getMovimiento();

    res.status(200).json(movimientos);
  } catch (err) {
    next(err);
  }
};
