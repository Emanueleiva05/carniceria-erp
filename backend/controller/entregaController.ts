import { NextFunction, Request, Response } from "express";
import {
  deleteEntrega,
  getDetallesByEntrega,
  getEntregaById,
  getEntregas,
  setEntrega,
  updateEntrega,
} from "../services/entregaService";

export const createEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const entrega = await setEntrega(data);

    res.status(202).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const modifyEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const entrega = await updateEntrega(id, data);

    res.status(202).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const removeEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteEntrega(id);

    res.status(202).json({ message: "Entrega eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainEntregaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const entrega = await getEntregaById(id);

    res.status(202).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const obtainEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const entregas = await getEntregas();

    res.status(202).json(entregas);
  } catch (err) {
    next(err);
  }
};

export const obtainDetallesEntregas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const detalles = await getDetallesByEntrega(id);

    res.status(202).json(detalles);
  } catch (err) {
    next(err);
  }
};
