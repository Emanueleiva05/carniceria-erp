import { Request, Response } from "express";
import {
  deleteEntregaDetalle,
  getEntregaDetalleById,
  getEntregaDetalles,
  setEntregaDetalle,
  updateEntregaDetalle,
} from "../services/entregaDetalleService";

export const createEntregaDetalle = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setEntregaDetalle(data);

    res.status(202).json({ message: "Entrega detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de entrega" });
  }
};

export const modifyEntregaDetalle = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateEntregaDetalle(parseInt(id), data);

    res.status(202).json({ message: "Entrega modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una entrega" });
  }
};

export const removeEntregaDetalle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteEntregaDetalle(parseInt(id));

    res.status(202).json({ message: "Entrega detalle eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una entrega detalle" });
  }
};

export const obtainEntregaDetalleById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const entrega_detalle = await getEntregaDetalleById(parseInt(id));

    res.status(202).json(entrega_detalle);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener una entrega detalle segun id",
    });
  }
};

export const obtainEntregaDetalles = async (req: Request, res: Response) => {
  try {
    const entrega_detalles = await getEntregaDetalles();

    res.status(202).json(entrega_detalles);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de obtener entregass detalles" });
  }
};
