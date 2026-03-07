import { Request, Response, NextFunction } from "express";
import * as productoServices from "../services/productoService";

export const createProducto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const producto = await productoServices.createProducto(data);

    res.status(201).json(producto);
  } catch (err) {
    next(err);
  }
};

export const updateProducto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const producto = await productoServices.updateProducto(id, data);

    res.status(200).json(producto);
  } catch (err) {
    next(err);
  }
};

export const updatePrecioVenta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;
    const precioNuevo = req.body.precioNuevo;

    await productoServices.updatePrecioVenta(id, precioNuevo);

    res.status(200).json({ message: "Precio de venta modificado con exito" });
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
    const id = res.locals.id;
    const cantidad = req.body.cantidad;

    await productoServices.updateCantidad(id, cantidad);

    res.status(200).json({ message: "Cantidad modificado con exito" });
  } catch (err) {
    next(err);
  }
};

export const updateStockMinimo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;
    const cantidad = req.body.cantidad;

    await productoServices.updateStockMinimo(id, cantidad);

    res.status(200).json({ message: "Cantidad minima modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const updatePrecioByCategoria = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { precioNuevo, categoria } = req.body;

    await productoServices.changePrecioVentaByCategoria(precioNuevo, categoria);

    res.status(200).json({ message: "Precio de venta modificado con exito" });
  } catch (err) {
    next(err);
  }
};

export const deleteProducto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await productoServices.deleteProducto(id);

    res.status(202).json({ message: "Producto detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getProductoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const producto = await productoServices.getProductoById(id);

    res.status(202).json(producto);
  } catch (err) {
    next(err);
  }
};

export const getProductos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productos = await productoServices.getProductos();

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};

export const getProductoByCategoria = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.params.data;

    if (!data) {
      return "Tranqui";
    }

    const productos = await productoServices.getProductoByCategoria(data);

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};
