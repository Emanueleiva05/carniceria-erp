import { Request, Response } from "express";
import {
  deleteEntrega,
  getEntregaById,
  getEntregas,
  setEntrega,
  updateEntrega,
} from "../services/entregaService";

export const createEntrega = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    data.fecha_entrega = new Date(data.fecha_entrega);

    await setEntrega(data);

    res.status(202).json({ message: "Entrega creada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de crear una Entrega" });
  }
};

export const modifyEntrega = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateEntrega(id, data);

    res.status(202).json({ message: "Entrega modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una Entrega" });
  }
};

export const removeEntrega = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    await deleteEntrega(id);

    res.status(202).json({ message: "Entrega eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una entrega" });
  }
};

export const obtainEntregaById = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    const entrega = await getEntregaById(id);

    res.status(202).json(entrega);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de obtener una entrega segun id" });
  }
};

export const obtainEntrega = async (req: Request, res: Response) => {
  try {
    const entregas = await getEntregas();

    res.status(202).json(entregas);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener entregas" });
  }
};
