import { Request, Response, NextFunction } from "express";
import * as mediaresSevices from "../services/mediaresService";

export const createMediares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const mediares = await mediaresSevices.createMediares(data);

    res.status(201).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const updateMediares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const mediares = await mediaresSevices.updateMediares(id, data);

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const updatePesoReal = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.peso_real;
    const id = res.locals.id;

    const mediares = await mediaresSevices.updatePesoReal(id, data);

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const updatePesoCarton = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.peso_carton;
    const id = res.locals.id;

    const mediares = await mediaresSevices.updatePesoCarton(id, data);

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const updatePrecioCompra = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.precio;
    const id = res.locals.id;

    const mediares = await mediaresSevices.updatePrecioCompra(id, data);

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const deleteMediares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await mediaresSevices.deleteMediares(id);

    res.status(204).json({ message: "Mediares eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getMediaresById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const mediares = await mediaresSevices.getMediaresById(id);

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const getMediares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const mediares = await mediaresSevices.getMediares();

    res.status(200).json(mediares);
  } catch (err) {
    next(err);
  }
};

export const getCarneByMediares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const carnes = await mediaresSevices.getCarneByMediares(id);

    res.status(202).json(carnes);
  } catch (err) {
    next(err);
  }
};
