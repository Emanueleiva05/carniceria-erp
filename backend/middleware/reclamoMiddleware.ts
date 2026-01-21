import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    motivo,
    estado,
    cantidad,
    genera_compensacion,
    genera_perdida,
    descripcion,
    evidencia,
    producto_id,
    proveedor_id,
  } = req.body;

  if (!motivo) throw new EmptyRequest("Motivo");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (proveedor_id === null || proveedor_id === 0 || proveedor_id === "")
    throw new EmptyRequest("Producto ID");

  if (cantidad === null || cantidad === 0 || cantidad === "")
    throw new EmptyRequest("Cantidad");

  if (typeof producto_id !== "number" || producto_id < 0)
    throw new BadRequest("Producto ID");

  if (typeof proveedor_id !== "number" || proveedor_id < 0)
    throw new BadRequest("Proveedor ID");

  if (typeof cantidad !== "number" || cantidad < 0)
    throw new BadRequest("Cantidad");

  if (typeof motivo !== "string" || motivo.trim().length === 0)
    throw new BadRequest("Motivo");

  if (typeof descripcion !== "string" || descripcion.trim().length === 0)
    throw new BadRequest("Descripcion");

  if (typeof evidencia !== "string" || evidencia.trim().length === 0)
    throw new BadRequest("Evidencia");

  next();
};
