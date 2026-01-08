import { Request, Response } from "express";
import {
  deleteVentaDetalle,
  getVentaDetalleById,
  getVentaDetalles,
  setVentaDetalle,
  updateVentaDetalle,
} from "../services/ventaDetalleService";

export const createVentaDetalle = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setVentaDetalle(data);

    res.status(202).json({ message: "Venta detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de venta" });
  }
};

export const modifyVentaDetalle = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateVentaDetalle(parseInt(id), data);

    res.status(202).json({ message: "Venta detalle modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar un detalle de venta" });
  }
};

export const removeVentaDetalle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteVentaDetalle(parseInt(id));

    res.status(202).json({ message: "Venta detalle eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una venta detalle" });
  }
};

export const obtainVentaDetalleById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const venta_detalle = await getVentaDetalleById(parseInt(id));

    res.status(202).json(venta_detalle);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener un venta detalle segun id",
    });
  }
};

export const obtainVentaDetalle = async (req: Request, res: Response) => {
  try {
    const venta_detalles = await getVentaDetalles();

    res.status(202).json(venta_detalles);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de obtener venta detalles" });
  }
};
