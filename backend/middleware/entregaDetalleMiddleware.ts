import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cantidad, precio_compra, entrega_id, producto_id } = req.body;

  if (precio_compra === null || precio_compra === 0 || precio_compra === "")
    throw new EmptyRequest("Precio compra");

  if (typeof precio_compra !== "number" || precio_compra <= 0)
    throw new BadRequest("Precio compra");

  if (cantidad === null || cantidad === 0 || cantidad === "")
    throw new EmptyRequest("Cantidad");

  if (typeof cantidad !== "number" || cantidad <= 0)
    throw new BadRequest("Cantidad");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  if (entrega_id === null || entrega_id === 0 || entrega_id === "")
    throw new EmptyRequest("Entrega ID");

  if (typeof entrega_id !== "number" || entrega_id <= 0)
    throw new BadRequest("Entrega ID");

  next();
};
