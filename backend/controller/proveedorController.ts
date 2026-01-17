import { Request, Response, NextFunction } from "express";
import {
  deleteProveedores,
  getProveedoresById,
  getProveedores,
  setProveedores,
  updateProveedores,
  getEntregasByProveedor,
} from "../services/proveedorService";

export const createProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const proveedor = await setProveedores(data);

    res.status(202).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const modifyProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const proveedor = await updateProveedores(id, data);

    res.status(202).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const removeProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteProveedores(id);

    res.status(202).json({ message: "Proveedor eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainProveedorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const proveedor = await getProveedoresById(id);

    res.status(202).json(proveedor);
  } catch (err) {
    next(err);
  }
};

export const obtainProveedores = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const proveedores = await getProveedores();

    res.status(202).json(proveedores);
  } catch (err) {
    next(err);
  }
};

export const obtainEntregaByProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;
    const entregas = await getEntregasByProveedor(id);
    res.status(201).json(entregas);
  } catch (err) {
    next(err);
  }
};
