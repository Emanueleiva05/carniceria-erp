import { NextFunction, Request, Response } from "express";
import {
  deleteEntregaDetalle,
  getEntregaDetalleById,
  getEntregaDetalles,
  setEntregaDetalle,
  updateEntregaDetalle,
} from "../services/entregaDetalleService";

export const createEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setEntregaDetalle(data);

    res.status(202).json({ message: "Entrega detalle creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateEntregaDetalle(id, data);

    res.status(202).json({ message: "Entrega modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteEntregaDetalle(id);

    res.status(202).json({ message: "Entrega detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainEntregaDetalleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const entrega_detalle = await getEntregaDetalleById(id);

    res.status(202).json(entrega_detalle);
  } catch (err) {
    next(err);
  }
};

export const obtainEntregaDetalles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const entrega_detalles = await getEntregaDetalles();

    res.status(202).json(entrega_detalles);
  } catch (err) {
    next(err);
  }
};
