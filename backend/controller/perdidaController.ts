import { Request, Response, NextFunction } from "express";
import {
  deletePerdida,
  getPerdidaById,
  getPerdidas,
  setPerdida,
  updatePerdida,
  getProductosPerdidos,
} from "../services/perdidaServices";

export const createPerdida = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const perdida = await setPerdida(data);

    res.status(202).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const modifyPerdida = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const perdida = await updatePerdida(id, data);

    res.status(202).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const removePerdida = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    await deletePerdida(id);

    res.status(202).json({ message: "Perdida detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const obtainPerdidaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const perdida = await getPerdidaById(id);

    res.status(202).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const obtainPerdidas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const perdidas = await getPerdidas();

    res.status(202).json(perdidas);
  } catch (err) {
    next(err);
  }
};

export const obtainProductosPerdida = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.id;

    const productos = await getProductosPerdidos(id);

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};
