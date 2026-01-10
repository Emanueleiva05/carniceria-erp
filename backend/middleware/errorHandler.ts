import { Request, Response, NextFunction } from "express";
import AppError from "../error/AppError";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.status || 500).json({
      name: err.name,
      message: err.message,
    });
  }

  return res.status(500).json({
    name: "Error inesperado",
    message: "Internal Server Error",
  });
};

export default errorHandler;
