import { Response, Request, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { producto_id, tirado, unidad_medida, fecha_perdida, motivo, total } =
    req.body;

  if (!fecha_perdida) throw new EmptyRequest("Fecha perdida");

  if (typeof fecha_perdida !== "string" || fecha_perdida.trim().length === 0)
    throw new BadRequest("Fecha perdida");

  if (!unidad_medida) throw new EmptyRequest("Unidad medida");

  if (typeof unidad_medida !== "string" || unidad_medida.trim().length === 0)
    throw new BadRequest("Unidad medida");

  if (tirado === null || tirado === 0 || tirado === "")
    throw new EmptyRequest("Tirado");

  if (typeof tirado !== "number" || tirado < 0) throw new BadRequest("Tirado");

  if (total === null || total === 0 || total === "")
    throw new EmptyRequest("Total");

  if (typeof total !== "number" || total <= 0) throw new BadRequest("Total");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  if (typeof motivo !== "string") throw new BadRequest("Motivo");

  next();
};
