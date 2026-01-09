import { Response, Request, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fecha_venta, esta_vendida } = req.body;

  if (!fecha_venta) {
    return res.status(400).json({ message: "Fecha venta no ingresado" });
  }

  if (typeof fecha_venta !== "string" || fecha_venta.trim().length === 0) {
    return res.status(400).json({ message: "Fecha venta no valido" });
  }

  if (esta_vendida === null) {
    return res.status(400).json({ message: "Esta vendida no ingresado" });
  }

  if (typeof esta_vendida !== "boolean") {
    return res.status(400).json({ message: "Esta vendida no valido" });
  }

  next();
};
