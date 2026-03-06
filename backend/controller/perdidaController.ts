import { Request, Response, NextFunction } from "express";
import * as perdidaService from "../services/perdidaServices";

export const createPerdida = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const perdida = await perdidaService.createPerdida(data);

    res.status(201).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const updatePerdida = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const perdida = await perdidaService.updatePerdida(id, data);

    res.status(200).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const updateTirado = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body.tirado;
    const id = res.locals.id;

    const perdida = await perdidaService.updateTirado(id, data);

    res.status(200).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const deletePerdida = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await perdidaService.deletePerdida(id);

    res.status(204).json({ message: "Perdida detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getPerdidaById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const perdida = await perdidaService.getPerdidaById(id);

    res.status(200).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const getPerdidas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const perdidas = await perdidaService.getPerdidas();

    res.status(200).json(perdidas);
  } catch (err) {
    next(err);
  }
};

export const getProductosPerdidos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const productos = await perdidaService.getProductosPerdidos(id);

    res.status(200).json(productos);
  } catch (err) {
    next(err);
  }
};

export const getPerdidaLastWeek = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const perdida = await perdidaService.getPerdidasLastWeek();

    res.status(200).json(perdida);
  } catch (err) {
    next(err);
  }
};

export const getPerdidaByMonth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const mes = req.body.mes;
    const anio = req.body.anio;
    const perdida = await perdidaService.getPerdidasByMounth(
      parseInt(mes),
      parseInt(anio),
    );

    res.status(202).json(perdida);
  } catch (err) {
    next(err);
  }
};
