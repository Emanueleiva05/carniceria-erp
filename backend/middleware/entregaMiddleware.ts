import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { proveedor_id } = req.body;

  if (proveedor_id === null || proveedor_id === 0 || proveedor_id === "")
    throw new EmptyRequest("Proveedor ID");

  if (typeof proveedor_id !== "number" || proveedor_id <= 0)
    throw new BadRequest("Proveedor ID");

  next();
};
