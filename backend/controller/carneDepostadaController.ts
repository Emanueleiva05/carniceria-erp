import { NextFunction, Request, Response } from "express";
import * as carneService from "../services/carneDepostadaService";

export const createCarne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const carne = await carneService.createCarne(data);

    res.status(201).json(carne);
  } catch (err) {
    next(err);
  }
};

export const updateCarne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const carne = await carneService.updateCarne(id, data);

    res.status(200).json(carne);
  } catch (err) {
    next(err);
  }
};

export const deleteCarne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await carneService.deleteCarne(id);

    res.status(204).json({ message: "Carne eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getCarneById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const carne = await carneService.getCarneById(id);

    res.status(200).json(carne);
  } catch (err) {
    next(err);
  }
};

export const getCarnes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const carnes = await carneService.getCarnes();

    res.status(200).json(carnes);
  } catch (err) {
    next(err);
  }
};
