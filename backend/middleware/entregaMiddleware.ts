import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fecha_entrega, total, pago, factura, proveedor_id } = req.body;

  if (!fecha_entrega) {
    return res.status(400).json({ message: "Fecha entrega no ingresado" });
  }

  if (typeof fecha_entrega !== "string" || fecha_entrega.trim().length === 0) {
    return res.status(400).json({ message: "Fecha entrega no valido" });
  }

  if (!total) {
    return res.status(400).json({ message: "Total no ingresado" });
  }

  if (typeof total !== "number" || total < 0) {
    return res.status(400).json({ message: "Total no valido" });
  }

  if (pago === null) {
    return res.status(400).json({ message: "Pago no ingresado" });
  }

  if (typeof pago !== "boolean") {
    return res.status(400).json({ message: "Pago no valido" });
  }

  if (!proveedor_id) {
    return res.status(400).json({ message: "Proveedor ID no ingresado" });
  }

  if (typeof proveedor_id !== "number" || proveedor_id <= 0) {
    return res.status(400).json({ message: "PRoveedor ID no valido" });
  }

  if (typeof factura !== "string") {
    return res.status(400).json({ message: "Factura no valido" });
  }

  next();
};
