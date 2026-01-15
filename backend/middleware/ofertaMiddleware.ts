import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { minKg, precio_oferta, producto_id } = req.body;

  if (minKg === null || minKg === 0 || minKg === "")
    throw new EmptyRequest("Minimo kilos");

  if (typeof minKg !== "number" || minKg <= 0)
    throw new BadRequest("Minimo kilos");

  if (precio_oferta === null || precio_oferta === 0 || precio_oferta === "")
    throw new EmptyRequest("Precio oferta");

  if (typeof precio_oferta !== "number" || precio_oferta <= 0)
    throw new BadRequest("Precio oferta");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  next();
};
