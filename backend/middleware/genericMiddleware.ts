import { Request, Response, NextFunction } from "express";

export const validateIdParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (!id) {
    return res
      .status(400)
      .json({ message: "ID no espcificado como parametro" });
  }

  const idInt = parseInt(id);

  if (Number.isNaN(idInt)) {
    return res
      .status(400)
      .json({ message: "El parametro ingresado no es un numero" });
  }

  res.locals.id = idInt;

  next();
};

export const validateFecha = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fecha_entrega = req.body.fecha_entrega;

  req.body.fecha_entrega = new Date(fecha_entrega);

  next();
};
