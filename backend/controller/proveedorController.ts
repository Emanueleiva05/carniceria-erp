import { Request, Response, NextFunction } from "express";
import * as proveedorServices from "../services/proveedorService";

export const createProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const proveedor = await proveedorServices.createProveedor(data);

    res.status(201).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const updateProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const proveedor = await proveedorServices.updateProveedores(id, data);

    res.status(200).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const deleteProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await proveedorServices.deleteProveedores(id);

    res.status(204).json({ message: "Proveedor eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getProveedorById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const proveedor = await proveedorServices.getProveedoresById(id);

    res.status(200).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const getProveedores = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const proveedores = await proveedorServices.getProveedores();

    res.status(200).json(proveedores);
  } catch (err) {
    next(err);
  }
};

export const getEntregaByProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;
    const entregas = await proveedorServices.getEntregasByProveedor(id);
    res.status(200).json(entregas);
  } catch (err) {
    next(err);
  }
};
