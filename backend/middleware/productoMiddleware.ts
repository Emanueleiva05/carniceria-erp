import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, categoria, precio_venta, unidad_medida } = req.body;

  if (!nombre) throw new EmptyRequest("Nombre");

  if (typeof nombre !== "string" || nombre.trim().length === 0)
    throw new BadRequest("Nombre");

  if (!categoria) throw new EmptyRequest("Categoria");

  if (typeof categoria !== "string" || categoria.trim().length === 0)
    throw new BadRequest("Categoria");

  if (precio_venta === null || precio_venta === 0 || precio_venta === "")
    throw new EmptyRequest("Precio venta");

  if (typeof precio_venta !== "number" || precio_venta < 0)
    throw new BadRequest("Precio venta");

  if (!unidad_medida) throw new EmptyRequest("Unidad medida");

  if (typeof unidad_medida !== "string" || unidad_medida.trim().length === 0)
    throw new BadRequest("Unidad medida");

  next();
};
