import { Response, Request, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { producto_id, tirado, unidad_medida, motivo } = req.body;

  if (!unidad_medida) throw new EmptyRequest("Unidad medida");

  if (typeof unidad_medida !== "string" || unidad_medida.trim().length === 0)
    throw new BadRequest("Unidad medida");

  if (tirado === null || tirado === 0 || tirado === "")
    throw new EmptyRequest("Tirado");

  if (typeof tirado !== "number" || tirado < 0) throw new BadRequest("Tirado");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  if (typeof motivo !== "string") throw new BadRequest("Motivo");

  next();
};
