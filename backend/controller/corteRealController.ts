import { Request, Response, NextFunction } from "express";
import * as corteRealService from "../services/corteRealService";

export const createCorteReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const carne = await corteRealService.createCorteReal(data);

    res.status(201).json(carne);
  } catch (err) {
    next(err);
  }
};

export const updateCorteReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const carne = await corteRealService.updateCorteReal(id, data);

    res.status(200).json(carne);
  } catch (err) {
    next(err);
  }
};

export const updatePeso = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.peso;
    const id = res.locals.id;

    const carne = await corteRealService.updatePeso(id, data);

    res.status(200).json(carne);
  } catch (err) {
    next(err);
  }
};

export const deleteCorteReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await corteRealService.deleteCorteReal(id);

    res.status(204).json({ message: "Carne real eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getCorteRealById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const carne = await corteRealService.getCorteRealById(id);

    res.status(200).json(carne);
  } catch (err) {
    next(err);
  }
};

export const getCorteReales = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const carnes = await corteRealService.getCorteReales();

    res.status(200).json(carnes);
  } catch (err) {
    next(err);
  }
};
