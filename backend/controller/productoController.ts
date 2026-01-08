import { Request, Response } from "express";
import {
  deleteProducto,
  getProductoById,
  getProductos,
  setProducto,
  updateProducto,
} from "../services/productoService";

export const createProducto = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setProducto(data);

    res.status(202).json({ message: "Producto detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de producto" });
  }
};

export const modifyProducto = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateProducto(parseInt(id), data);

    res.status(202).json({ message: "Producto modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una producto" });
  }
};

export const removeProducto = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteProducto(parseInt(id));

    res.status(202).json({ message: "Producto detalle eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una producto" });
  }
};

export const obtainProductoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const producto = await getProductoById(parseInt(id));

    res.status(202).json(producto);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener un producto segun id",
    });
  }
};

export const obtainProductos = async (req: Request, res: Response) => {
  try {
    const productos = await getProductos();

    res.status(202).json(productos);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener productos" });
  }
};
