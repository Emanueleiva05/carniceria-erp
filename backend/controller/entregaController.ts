import { NextFunction, Request, Response } from "express";
import * as entregaService from "../services/entregaService";

export const createEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const entrega = await entregaService.createEntrega(data);

    res.status(201).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const updateEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const entrega = await entregaService.updateEntrega(id, data);

    res.status(200).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const deleteEntrega = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await entregaService.deleteEntrega(id);

    res.status(204).json({ message: "Entrega eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getEntregaById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const entrega = await entregaService.getEntregaById(id);

    res.status(200).json(entrega);
  } catch (err) {
    next(err);
  }
};

export const getEntregas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entregas = await entregaService.getEntregas();

    res.status(200).json(entregas);
  } catch (err) {
    next(err);
  }
};

export const getDetallesByEntregas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const detalles = await entregaService.getDetallesByEntrega(id);

    res.status(202).json(detalles);
  } catch (err) {
    next(err);
  }
};
