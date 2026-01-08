import { Request, Response } from "express";
import {
  deletePerdida,
  getPerdidaById,
  getPerdidas,
  setPerdida,
  updatePerdida,
} from "../services/perdidaServices";

export const createPerdida = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setPerdida(data);

    res.status(202).json({ message: "Perdida detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de Perdida" });
  }
};

export const modifyPerdida = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updatePerdida(parseInt(id), data);

    res.status(202).json({ message: "Perdida modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una perdida" });
  }
};

export const removePerdida = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deletePerdida(parseInt(id));

    res.status(202).json({ message: "Perdida detalle eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una perdida" });
  }
};

export const obtainPerdidaById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    const perdida = await getPerdidaById(parseInt(id));

    res.status(202).json(perdida);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener una perdida detalle segun id",
    });
  }
};

export const obtainPerdidas = async (req: Request, res: Response) => {
  try {
    const perdidas = await getPerdidas();

    res.status(202).json(perdidas);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener perdidas" });
  }
};
