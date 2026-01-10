import { Request, Response, NextFunction } from "express";
import {
  deleteProducto,
  getProductoById,
  getProductos,
  setProducto,
  updateProducto,
} from "../services/productoService";

export const createProducto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setProducto(data);

    res.status(202).json({ message: "Producto detalle creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyProducto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateProducto(id, data);

    res.status(202).json({ message: "Producto modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeProducto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteProducto(id);

    res.status(202).json({ message: "Producto detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainProductoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const producto = await getProductoById(id);

    res.status(202).json(producto);
  } catch (err) {
    next(err);
  }
};

export const obtainProductos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productos = await getProductos();

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};
