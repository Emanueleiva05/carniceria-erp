import { Request, Response } from "express";
import {
  deleteMediares,
  getMediares,
  getMediaresById,
  setMediares,
  updateMediares,
} from "../services/mediaresService";

export const createMediares = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setMediares(data);

    res.status(202).json({ message: "Mediares creada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de crear una mediares" });
  }
};

export const modifyMediares = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateMediares(id, data);

    res.status(202).json({ message: "Mediares modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una mediares" });
  }
};

export const removeMediares = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    await deleteMediares(id);

    res.status(202).json({ message: "Mediares eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una mediares" });
  }
};

export const obtainMediaresById = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;

    const mediares = await getMediaresById(id);

    res.status(202).json(mediares);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de obtener una mediares segun id" });
  }
};

export const obtainMediares = async (req: Request, res: Response) => {
  try {
    const mediares = await getMediares();

    res.status(202).json(mediares);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener mediares" });
  }
};
