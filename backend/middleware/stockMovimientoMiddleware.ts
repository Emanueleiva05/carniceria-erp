import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    tipo_movimiento,
    motivo,
    cantidad,
    referencia_id,
    referencia_tipo,
    producto_id,
  } = req.body;

  if (!tipo_movimiento)
    return res.status(400).json({ message: "Tipo motivo no ingresado" });

  if (
    typeof tipo_movimiento !== "string" ||
    tipo_movimiento.trim().length === 0
  ) {
    return res.status(400).json({ message: "Tipo movimiento no valido" });
  }

  if (!cantidad)
    return res.status(400).json({ message: "Cantidad no ingresado" });

  if (typeof cantidad !== "number" || cantidad <= 0) {
    return res.status(400).json({ message: "Cantidad no valido" });
  }

  if (!motivo) return res.status(400).json({ message: "Motivo no ingresado" });

  if (typeof motivo !== "string" || motivo.trim().length === 0) {
    return res.status(400).json({ message: "Motivo no valido" });
  }

  if (!referencia_tipo)
    return res.status(400).json({ message: "Referencia tipo no ingresado" });

  if (
    typeof referencia_tipo !== "string" ||
    referencia_tipo.trim().length === 0
  ) {
    return res.status(400).json({ message: "Referencia tipo no valido" });
  }

  if (!producto_id)
    return res.status(400).json({ message: "Producto no ingresado" });

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  if (!referencia_id)
    return res.status(400).json({ message: "Referencia ID no ingresado" });

  if (typeof referencia_id !== "number" || referencia_id <= 0) {
    return res.status(400).json({ message: "Referencia ID no valido" });
  }

  next();
};
