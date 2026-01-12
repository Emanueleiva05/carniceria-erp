import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fecha_entrega, total, pago, factura, proveedor_id } = req.body;

  if (!fecha_entrega) throw new EmptyRequest("Fecha entrega");

  if (typeof fecha_entrega !== "string" || fecha_entrega.trim().length === 0)
    throw new BadRequest("Fecha entrega");

  if (total === null || total === 0 || total === "")
    throw new EmptyRequest("Total");

  if (typeof total !== "number" || total < 0) throw new BadRequest("Total");

  if (proveedor_id === null || proveedor_id === 0 || proveedor_id === "")
    throw new EmptyRequest("Proveedor ID");

  if (typeof proveedor_id !== "number" || proveedor_id <= 0)
    throw new BadRequest("Proveedor ID");

  if (typeof factura !== "string") throw new BadRequest("Factura");

  next();
};
