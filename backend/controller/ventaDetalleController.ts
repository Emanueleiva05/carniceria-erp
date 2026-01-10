import { Request, Response, NextFunction } from "express";
import {
  deleteVentaDetalle,
  getVentaDetalleById,
  getVentaDetalles,
  setVentaDetalle,
  updateVentaDetalle,
} from "../services/ventaDetalleService";

export const createVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setVentaDetalle(data);

    res.status(202).json({ message: "Venta detalle creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateVentaDetalle(id, data);

    res.status(202).json({ message: "Venta detalle modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteVentaDetalle(id);

    res.status(202).json({ message: "Venta detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainVentaDetalleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const venta_detalle = await getVentaDetalleById(id);

    res.status(202).json(venta_detalle);
  } catch (err) {
    next(err);
  }
};

export const obtainVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const venta_detalles = await getVentaDetalles();

    res.status(202).json(venta_detalles);
  } catch (err) {
    next(err);
  }
};
