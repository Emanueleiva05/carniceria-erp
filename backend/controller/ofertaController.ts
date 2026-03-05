import { Request, Response, NextFunction } from "express";
import * as ofertaService from "../services/ofertaServices";

export const createOferta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const oferta = await ofertaService.createOferta(data);

    res.status(201).json(oferta);
  } catch (err) {
    next(err);
  }
};

export const updateOferta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const id = res.locals.id;

    const oferta = await ofertaService.updateOferta(id, data);

    res.status(200).json(oferta);
  } catch (err) {
    next(err);
  }
};

export const deleteOferta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    await ofertaService.deleteOferta(id);

    res.status(204).json({ message: "Oferta detalle eliminada con exito" });
  } catch (err) {
    next(err);
  }
};

export const getOfertaById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const oferta = await ofertaService.getOfertaById(id);

    res.status(200).json(oferta);
  } catch (err) {
    next(err);
  }
};

export const getOfertas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ofertas = await ofertaService.getOfertas();

    res.status(200).json(ofertas);
  } catch (err) {
    next(err);
  }
};

export const getActiveOferta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ofertasActivas = await ofertaService.getActiveOfertas();

    res.status(200).json(ofertasActivas);
  } catch (err) {
    next(err);
  }
};

export const getProductosEnOferta = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = res.locals.id;

    const productos = await ofertaService.getProductosEnOferta(id);

    res.status(202).json(productos);
  } catch (err) {
    next(err);
  }
};
