import { Request, Response, NextFunction } from "express";
import * as ventaService from "../services/ventaService";

export const createVenta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const venta = await ventaService.createVenta();

    res.status(201).json(venta);
  } catch (err) {
    next(err);
  }
};

export const updateVenta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const venta = await ventaService.updateVenta(id, data);

    res.status(200).json(venta);
  } catch (err) {
    next(err);
  }
};

export const updateVendida = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const venta = await ventaService.updateVendida(id);

    res.status(200).json(venta);
  } catch (err) {
    next(err);
  }
};

export const deleteVenta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await ventaService.deleteVenta(id);

    res.status(204).json({ message: "Venta eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getVentaById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const venta = await ventaService.getVentaById(id);

    res.status(200).json(venta);
  } catch (err) {
    next(err);
  }
};

export const getVentas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ventas = await ventaService.getVentas();

    res.status(200).json(ventas);
  } catch (err) {
    next(err);
  }
};

export const getDetallesByVenta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const detalles = await ventaService.getDetallesByVenta(id);

    res.status(200).json(detalles);
  } catch (err) {
    next(err);
  }
};
