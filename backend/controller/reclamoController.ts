import { Request, Response, NextFunction } from "express";
import * as reclamoService from "../services/reclamoService";

export const createReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const reclamo = await reclamoService.createReclamo(data);

    res.status(201).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const changeEstadoAceptado = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const reclamo = await reclamoService.acceptReclamo(id);

    res.status(200).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const changeEstadoRechazado = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const reclamo = await reclamoService.rejectReclamo(id);

    res.status(200).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const updateReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const reclamo = await reclamoService.updateReclamo(id, data);

    res.status(200).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const deleteReclamo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await reclamoService.deleteReclamo(id);

    res.status(204).json({ message: "Reclamo eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getReclamoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const reclamo = await reclamoService.getReclamoById(id);

    res.status(200).json(reclamo);
  } catch (err) {
    next(err);
  }
};

export const getReclamos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reclamos = await reclamoService.getReclamos();

    res.status(200).json(reclamos);
  } catch (err) {
    next(err);
  }
};

export const getReclamoByProveedor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const reclamos = await reclamoService.getReclamosByProveedor(id);

    res.status(200).json(reclamos);
  } catch (err) {
    next(err);
  }
};
