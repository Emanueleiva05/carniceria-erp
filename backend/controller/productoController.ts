import { Request, Response, NextFunction } from "express";
import {
  deleteProducto,
  getProductoByCategoria,
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

    const producto = await setProducto(data);

    res.status(202).json(producto);
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

    const producto = await updateProducto(id, data);

    res.status(202).json(producto);
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

export const obtainProductoByCategoria = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.params.data;

    if (!data) {
      return "Tranqui";
    }

    const productos = await getProductoByCategoria(data);

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};
