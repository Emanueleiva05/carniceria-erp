import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, categoria, stock_actual, precio_venta, unidad_medida } =
    req.body;

  if (!nombre) return res.status(400).json({ message: "Nombre no ingresado" });

  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    return res.status(400).json({ message: "Nombre no valido" });
  }

  if (!categoria)
    return res.status(400).json({ message: "Categoria no ingresada" });

  if (typeof categoria !== "string" || categoria.trim().length === 0) {
    return res.status(400).json({ message: "Categoria no valida" });
  }

  if (!stock_actual)
    return res.status(400).json({ message: "Stock actual no ingresado" });

  if (typeof stock_actual !== "number" || stock_actual < 0) {
    return res.status(400).json({ message: "Stock actual no valido" });
  }

  if (!precio_venta)
    return res.status(400).json({ message: "Precio venta no ingresado" });

  if (typeof precio_venta !== "number" || precio_venta < 0) {
    return res.status(400).json({ message: "Precio venta no valido" });
  }

  if (!unidad_medida)
    return res.status(400).json({ message: "Unidad de medida no ingresado" });

  if (typeof unidad_medida !== "string" || unidad_medida.trim().length === 0) {
    return res.status(400).json({ message: "Unidad de medida no valido" });
  }

  next();
};
