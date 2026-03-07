import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    peso_carton,
    tamanio,
    precio_compra,
    peso_real,
    tipo_vaca,
    entrega_id,
  } = req.body;

  if (peso_carton === null || peso_carton === 0 || peso_carton === "")
    throw new EmptyRequest("Peso carton");

  if (typeof peso_carton !== "number" || peso_carton <= 0)
    throw new BadRequest("Peso carton");

  if (precio_compra === null || precio_compra === 0 || precio_compra === "")
    throw new EmptyRequest("Precio compra");

  if (typeof precio_compra !== "number" || precio_compra <= 0)
    throw new BadRequest("Precio compra");

  if (peso_real === null || peso_real === 0 || peso_real === "")
    throw new EmptyRequest("Peso real");

  if (typeof peso_real !== "number" || peso_real <= 0)
    throw new BadRequest("Peso real");

  if (entrega_id === null || entrega_id === 0 || entrega_id === "")
    throw new EmptyRequest("Entrega ID");

  if (typeof entrega_id !== "number" || entrega_id <= 0)
    throw new BadRequest("Entrega ID");

  next();
};
