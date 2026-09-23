import type { Request, Response, NextFunction } from "express";

import type { AppError } from "../errors/AppError";

function globalErrorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || "Something went wrong.",
  });
}

export default globalErrorHandler;
