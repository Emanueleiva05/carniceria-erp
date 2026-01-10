import { Request, Response, NextFunction } from "express";
import EmptyRequest from "../error/EmptyRequest";
import BadRequest from "../error/BadRequest";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    precio_unitario,
    subtotal,
    cantidad,
    producto_id,
    venta_id,
    oferta_id,
  } = req.body;

  if (subtotal === null || subtotal === 0 || subtotal === "")
    throw new EmptyRequest("Subtotal");

  if (typeof subtotal !== "number" || subtotal <= 0)
    throw new BadRequest("Subtotal");

  if (cantidad === null || cantidad === 0 || cantidad === "")
    throw new EmptyRequest("Cantidad");

  if (typeof cantidad !== "number" || cantidad <= 0)
    throw new BadRequest("Cantidad");

  if (
    precio_unitario === null ||
    precio_unitario === 0 ||
    precio_unitario === ""
  )
    throw new EmptyRequest("Precio unitario");

  if (typeof precio_unitario !== "number" || precio_unitario <= 0)
    throw new BadRequest("Precio unitario");

  if (producto_id === null || producto_id === 0 || producto_id === "")
    throw new EmptyRequest("Producto ID");

  if (typeof producto_id !== "number" || producto_id <= 0)
    throw new BadRequest("Producto ID");

  if (venta_id === null || venta_id === 0) throw new EmptyRequest("Venta ID");

  if (typeof venta_id !== "number" || venta_id <= 0)
    throw new BadRequest("Venta ID");

  if (typeof oferta_id !== "number" || oferta_id <= 0)
    throw new BadRequest("Oferta IDs");

  next();
};
