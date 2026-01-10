import { Response, Request, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fecha_venta, esta_vendida } = req.body;

  if (!fecha_venta) throw new EmptyRequest("Fecha venta");

  if (typeof fecha_venta !== "string" || fecha_venta.trim().length === 0)
    throw new BadRequest("Fecha venta");

  if (esta_vendida === null) throw new EmptyRequest("Esta vendida");

  if (typeof esta_vendida !== "boolean") throw new BadRequest("Esta vendida");

  next();
};
