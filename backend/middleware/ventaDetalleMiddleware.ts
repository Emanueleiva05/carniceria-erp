import { Request, Response, NextFunction } from "express";

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

  if (!subtotal)
    return res.status(400).json({ message: "Subtotal no ingresado" });

  if (typeof subtotal !== "number" || subtotal <= 0) {
    return res.status(400).json({ message: "Subtotal no valido" });
  }

  if (!cantidad)
    return res.status(400).json({ message: "Cantidad no ingresado" });

  if (typeof cantidad !== "number" || cantidad <= 0) {
    return res.status(400).json({ message: "Cantidad no valido" });
  }

  if (!precio_unitario)
    return res.status(400).json({ message: "Precio unitario no ingresado" });

  if (typeof precio_unitario !== "number" || precio_unitario <= 0) {
    return res.status(400).json({ message: "Precio unitario no valido" });
  }

  if (!producto_id)
    return res.status(400).json({ message: "Producto no ingresado" });

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  if (!venta_id)
    return res.status(400).json({ message: "Venta ID no ingresado" });

  if (typeof venta_id !== "number" || venta_id <= 0) {
    return res.status(400).json({ message: "Venta ID no valido" });
  }

  if (typeof oferta_id !== "number" || oferta_id <= 0) {
    return res.status(400).json({ message: "Oferta ID no valido" });
  }

  next();
};
