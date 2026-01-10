import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, telefono } = req.body;

  if (!nombre) throw new EmptyRequest("Nombre");

  if (!telefono) throw new EmptyRequest("Telefono");

  if (typeof nombre !== "string" || nombre.trim().length === 0)
    throw new BadRequest("Nombre");

  if (typeof telefono !== "string" || nombre.trim().length === 0)
    throw new BadRequest("Telefono");

  next();
};
