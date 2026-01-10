import { Request, Response } from "express";
import {
  deleteVenta,
  getVentaById,
  getVentas,
  setVenta,
  updateVenta,
} from "../services/ventaService";

export const createVenta = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    data.fecha_venta = new Date(data.fecha_venta);

    await setVenta(data);

    res.status(202).json({ message: "Venta detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de venta" });
  }
};

export const modifyVenta = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateVenta(id, data);

    res.status(202).json({ message: "Venta modificada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de modificar una venta" });
  }
};

export const removeVenta = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    await deleteVenta(id);

    res.status(202).json({ message: "Venta eliminada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de eliminar una venta" });
  }
};

export const obtainVentaById = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    const venta = await getVentaById(id);

    res.status(202).json(venta);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener un venta segun id",
    });
  }
};

export const obtainVentas = async (req: Request, res: Response) => {
  try {
    const ventas = await getVentas();

    res.status(202).json(ventas);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener ventas" });
  }
};
