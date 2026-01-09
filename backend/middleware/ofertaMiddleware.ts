import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { minKg, precio_oferta, esta_activo, producto_id } = req.body;

  if (!minKg)
    return res.status(400).json({ message: "Kilos minimos no ingresado" });

  if (typeof minKg !== "number" || minKg <= 0) {
    return res.status(400).json({ message: "Minimo de kilos no valido" });
  }

  if (!precio_oferta)
    return res.status(400).json({ message: "Precio oferta no ingresado" });

  if (typeof precio_oferta !== "number" || precio_oferta <= 0) {
    return res.status(400).json({ message: "Precio de oferta no valido" });
  }

  if (esta_activo === null) {
    return res.status(400).json({ message: "Esta activo no ingresado" });
  }

  if (typeof esta_activo !== "boolean") {
    return res.status(400).json({ message: "Esta activo no valido" });
  }

  if (!producto_id)
    return res.status(400).json({ message: "Producto no ingresado" });

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  next();
};
