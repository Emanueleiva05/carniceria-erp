import { Request, Response, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { peso_real, mediares_id, producto_id } = req.body;

  if (!peso_real)
    return res.status(400).json({ message: "Peso real compra no ingresado" });

  if (typeof peso_real !== "number" || peso_real <= 0) {
    return res.status(400).json({ message: "Precio compra no valido" });
  }

  if (!producto_id)
    return res.status(400).json({ message: "Producto no ingresado" });

  if (typeof producto_id !== "number" || producto_id <= 0) {
    return res.status(400).json({ message: "Producto ID no valido" });
  }

  if (!mediares_id)
    return res.status(400).json({ message: "Mediares ID no ingresado" });

  if (typeof mediares_id !== "number" || mediares_id <= 0) {
    return res.status(400).json({ message: "Mediares ID no valido" });
  }

  next();
};
