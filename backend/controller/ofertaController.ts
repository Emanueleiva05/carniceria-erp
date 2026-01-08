import { Request, Response } from "express";
import {
  deleteOferta,
  getOfertaById,
  getOfertas,
  setOferta,
  updateOferta,
} from "../services/ofertaServices";

export const createOferta = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setOferta(data);

    res.status(202).json({ message: "Oferta detalle creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de oferta" });
  }
};

export const modifyOferta = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateOferta(parseInt(id), data);

    res.status(202).json({ message: "Oferta modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una oferta" });
  }
};

export const removeOferta = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteOferta(parseInt(id));

    res.status(202).json({ message: "Oferta detalle eliminada con exito" });
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de eliminar una oferta" });
  }
};

export const obtainOfertaById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    const oferta = await getOfertaById(parseInt(id));

    res.status(202).json(oferta);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener una oferta detalle segun id",
    });
  }
};

export const obtainOfertas = async (req: Request, res: Response) => {
  try {
    const ofertas = await getOfertas();

    res.status(202).json(ofertas);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener oferta " });
  }
};
