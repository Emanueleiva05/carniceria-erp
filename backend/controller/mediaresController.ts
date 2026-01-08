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
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateMediares(parseInt(id), data);

    res.status(202).json({ message: "Mediares modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una mediares" });
  }
};

export const removeMediares = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteMediares(parseInt(id));

    res.status(202).json({ message: "Mediares eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una mediares" });
  }
};

export const obtainMediaresById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const mediares = await getMediaresById(parseInt(id));

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
