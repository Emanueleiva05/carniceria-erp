import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

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

  if (!tipo_movimiento) throw new EmptyRequest("Tipo movimiento");

  if (
    typeof tipo_movimiento !== "string" ||
    tipo_movimiento.trim().length === 0
  )
    throw new BadRequest("Tipo movimiento");

  if (cantidad === null || cantidad === 0 || cantidad === "")
    throw new EmptyRequest("Cantidad");

  if (typeof cantidad !== "number" || cantidad <= 0)
    throw new BadRequest("Cantidad");

  if (!motivo) throw new EmptyRequest("Motivo");

  if (typeof motivo !== "string" || motivo.trim().length === 0)
    throw new BadRequest("Motivo");

  if (!referencia_tipo) throw new EmptyRequest("Referencia tipo");

  if (
    typeof referencia_tipo !== "string" ||
    referencia_tipo.trim().length === 0
  )
    throw new BadRequest("Referencia tipo");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  if (!referencia_id) throw new EmptyRequest("Referencia ID");

  if (typeof referencia_id !== "number" || referencia_id <= 0)
    throw new BadRequest("Referencia ID");

  next();
};
