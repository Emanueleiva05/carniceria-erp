import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, telefono } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: "Nombre no ingresado" });
  }

  if (!telefono) {
    return res.status(400).json({ message: "Telefono no ingresado" });
  }

  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    return res.status(400).json({ message: "Nombre no valido" });
  }

  if (typeof telefono !== "string" || nombre.trim().length === 0) {
    return res.status(400).json({ message: "Telefono no valido" });
  }

  next();
};
