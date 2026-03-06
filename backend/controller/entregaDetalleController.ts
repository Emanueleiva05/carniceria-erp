import { NextFunction, Request, Response } from "express";
import * as entregaDetalleService from "../services/entregaDetalleService";

export const createEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const entregaDetalle =
      await entregaDetalleService.createEntregaDetalle(data);

    res.status(201).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};

export const updateEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const entregaDetalle = await entregaDetalleService.updateEntregaDetalle(
      id,
      data,
    );

    res.status(200).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};

export const updateCantidad = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.cantidad;
    const id = res.locals.id;

    const entregaDetalle = await entregaDetalleService.updateCantidad(id, data);

    res.status(200).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};

export const updatePrecio = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.precio;
    const id = res.locals.id;

    const entregaDetalle = await entregaDetalleService.updatePrecio(id, data);

    res.status(200).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};

export const deleteEntregaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await entregaDetalleService.deleteEntregaDetalle(id);

    res.status(204).json({ message: "Entrega detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getEntregaDetalleById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const entregaDetalle =
      await entregaDetalleService.getEntregaDetalleById(id);

    res.status(204).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};

export const getEntregaDetalles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entregaDetalle = await entregaDetalleService.getEntregaDetalles();

    res.status(200).json(entregaDetalle);
  } catch (err) {
    next(err);
  }
};
