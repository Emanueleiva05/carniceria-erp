import { Request, Response, NextFunction } from "express";
import * as ventaDetalleServices from "../services/ventaDetalleService";

export const createVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const ventaDetalle = await ventaDetalleServices.createVentaDetalle(data);

    res.status(201).json(ventaDetalle);
  } catch (err) {
    next(err);
  }
};

export const updateVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const ventaDetalle = await ventaDetalleServices.updateVentaDetalle(
      id,
      data,
    );

    res.status(200).json(ventaDetalle);
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
    const cantidad = req.body.cantidad;
    const id = res.locals.id;

    const ventaDetalle = await ventaDetalleServices.updateCantidad(
      id,
      cantidad,
    );

    res.status(200).json(ventaDetalle);
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
    const precio = req.body.peso;
    const id = res.locals.id;

    const ventaDetalle = await ventaDetalleServices.updatePrecio(id, precio);

    res.status(200).json(ventaDetalle);
  } catch (err) {
    next(err);
  }
};

export const deleteVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await ventaDetalleServices.deleteVentaDetalle(id);

    res.status(204).json({ message: "Venta detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getVentaDetalleById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const venta_detalle = await ventaDetalleServices.getVentaDetalleById(id);

    res.status(202).json(venta_detalle);
  } catch (err) {
    next(err);
  }
};

export const getVentaDetalle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const venta_detalles = await ventaDetalleServices.getVentaDetalles();

    res.status(200).json(venta_detalles);
  } catch (err) {
    next(err);
  }
};
