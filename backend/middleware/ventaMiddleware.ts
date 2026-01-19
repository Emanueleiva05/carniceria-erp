import { Response, Request, NextFunction } from "express";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {} = req.body;

  next();
};
