import { Response, Request, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { producto_id, tirado, unidad_medida, fecha_perdida, motivo, total } =
    req.body;

  if (!fecha_perdida) {
    return res.status(400).json({ message: "Fecha entrega no ingresado" });
  }

  if (typeof fecha_perdida !== "string" || fecha_perdida.trim().length === 0) {
    return res.status(400).json({ message: "Fecha perdida no valido" });
  }

  if (!unidad_medida) {
    return res.status(400).json({ message: "Unidad de medida no ingresado" });
  }

  if (typeof unidad_medida !== "string" || unidad_medida.trim().length === 0) {
    return res.status(400).json({ message: "Unidad de medida no valido" });
  }

  if (!tirado) {
    return res.status(400).json({ message: "Total no ingresado" });
  }

  if (typeof tirado !== "number" || tirado < 0) {
    return res.status(400).json({ message: "Kilos tirados no valido" });
  }

  if (!total) {
    return res.status(400).json({ message: "Total no ingresado" });
  }

  if (typeof total !== "number" || total <= 0) {
    return res.status(400).json({ message: "Total no valido" });
  }

  if (!producto_id) {
    return res.status(400).json({ message: "Producto no ingresado" });
  }

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  if (typeof motivo !== "string") {
    return res.status(400).json({ message: "Motivo no valido" });
  }

  next();
};
