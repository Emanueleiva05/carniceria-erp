import { Request, Response } from "express";
import {
  deleteCarne,
  getCarneById,
  getCarnes,
  setCarne,
  updateCarne,
} from "../services/carneDepostadaService";

export const createCarne = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setCarne(data);

    res.status(202).json({ message: "Carne creada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de crear un carne" });
  }
};

export const modifyCarne = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateCarne(parseInt(id), data);

    res.status(202).json({ message: "Carne modificada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de modificar una carne" });
  }
};

export const removeCarne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteCarne(parseInt(id));

    res.status(202).json({ message: "Carne eliminada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de eliminar una carne" });
  }
};

export const obtainCarneById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const carne = await getCarneById(parseInt(id));

    res.status(202).json(carne);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de obtener una carne segun id" });
  }
};

export const obtainCarne = async (req: Request, res: Response) => {
  try {
    const carnes = await getCarnes();

    res.status(202).json(carnes);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener carnes" });
  }
};
