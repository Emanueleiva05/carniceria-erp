import { Request, Response, NextFunction } from "express";
import {
  deleteOferta,
  getOfertaById,
  getOfertas,
  setOferta,
  updateOferta,
} from "../services/ofertaServices";

export const createOferta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    await setOferta(data);

    res.status(202).json({ message: "Oferta detalle creada con exito" });
  } catch (err) {
    next(err);
  }
};

export const modifyOferta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    await updateOferta(id, data);

    res.status(202).json({ message: "Oferta modificada con exito" });
  } catch (err) {
    next(err);
  }
};

export const removeOferta = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deleteOferta(id);

    res.status(202).json({ message: "Oferta detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainOfertaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const oferta = await getOfertaById(id);

    res.status(202).json(oferta);
  } catch (err) {
    next(err);
  }
};

export const obtainOfertas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ofertas = await getOfertas();

    res.status(202).json(ofertas);
  } catch (err) {
    next(err);
  }
};
