import { Request, Response, NextFunction } from "express";
import {
  deleteVenta,
  getDetallesByVenta,
  getVentaById,
  getVentas,
  setVenta,
  updateVenta,
} from "../services/ventaService";

export const createVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    data.fecha_venta = new Date(data.fecha_venta);

    const venta = await setVenta(data);

    res.status(202).json(venta);
  } catch (err) {
    next(err);
  }
};

export const modifyVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const venta = await updateVenta(id, data);

    res.status(202).json(venta);
  } catch (err) {
    next(err);
  }
};

export const removeVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteVenta(id);

    res.status(202).json({ message: "Venta eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainVentaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const venta = await getVentaById(id);

    res.status(202).json(venta);
  } catch (err) {
    next(err);
  }
};

export const obtainVentas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ventas = await getVentas();

    res.status(202).json(ventas);
  } catch (err) {
    next(err);
  }
};

export const obtainDetallesVenta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const detalles = await getDetallesByVenta(id);

    res.status(202).json(detalles);
  } catch (err) {
    next(err);
  }
};
