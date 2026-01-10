import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { peso_real, mediares_id, producto_id } = req.body;

  if (peso_real === null || peso_real === 0 || peso_real === "")
    throw new EmptyRequest("Peso real");

  if (typeof peso_real !== "number" || peso_real < 0)
    throw new BadRequest("Peso real");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id < 0)
    throw new BadRequest("Producto ID");

  if (mediares_id === null || mediares_id === 0 || mediares_id === "")
    throw new EmptyRequest("Mediares ID");

  if (typeof mediares_id !== "number" || mediares_id < 0)
    throw new BadRequest("Mediares ID");

  next();
};
