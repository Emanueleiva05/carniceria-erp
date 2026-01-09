import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cantidad, precio_compra, entrega_id, producto_id } = req.body;

  if (!precio_compra)
    return res.status(400).json({ message: "Precio compra no ingresado" });

  if (typeof precio_compra !== "number" || precio_compra <= 0) {
    return res.status(400).json({ message: "Precio compra no valido" });
  }

  if (!cantidad)
    return res.status(400).json({ message: "Cantidad no ingresado" });

  if (typeof cantidad !== "number" || cantidad <= 0) {
    return res.status(400).json({ message: "Cantidad no valido" });
  }

  if (!producto_id)
    return res.status(400).json({ message: "Producto no ingresado" });

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  if (!entrega_id)
    return res.status(400).json({ message: "Entrega ID no ingresado" });

  if (typeof entrega_id !== "number" || entrega_id <= 0) {
    return res.status(400).json({ message: "Entrega ID no valido" });
  }

  next();
};
