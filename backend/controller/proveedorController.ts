import { Request, Response } from "express";
import {
  deleteProveedores,
  getProveedoresById,
  getProveedores,
  setProveedores,
  updateProveedores,
} from "../services/proveedorService";

export const createProveedor = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setProveedores(data);

    res.status(202).json({ message: "Proveedor detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de proveedor" });
  }
};

export const modifyProveedor = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateProveedores(parseInt(id), data);

    res.status(202).json({ message: "Proveedor modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una proveedor" });
  }
};

export const removeProveedor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteProveedores(parseInt(id));

    res.status(202).json({ message: "Proveedor eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una proveedor" });
  }
};

export const obtainProveedorById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    const proveedor = await getProveedoresById(parseInt(id));

    res.status(202).json(proveedor);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener un proveedor segun id",
    });
  }
};

export const obtainProveedores = async (req: Request, res: Response) => {
  try {
    const proveedores = await getProveedores();

    res.status(202).json(proveedores);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener proveedores" });
  }
};
