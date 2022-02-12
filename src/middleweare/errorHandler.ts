import { Request, Response, NextFunction } from "express";

export default function handleError(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404).json({ error: err.message });

  next(err);
}
