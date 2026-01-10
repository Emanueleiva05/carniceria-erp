import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateIdParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (!id) throw new EmptyRequest("ID en parametro");

  const idInt = parseInt(id);

  if (Number.isNaN(idInt)) throw new BadRequest("ID no es un numero");

  res.locals.id = idInt;

  next();
};

export const validateFecha = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fecha_entrega = req.body.fecha_entrega;

  req.body.fecha_entrega = new Date(fecha_entrega);

  next();
};
