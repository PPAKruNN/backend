import { HttpException } from "@/errors/errors";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export type AppError = Error & {
  type: string;
};

export default function errorHandler(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if (error instanceof HttpException) {
    const message = {
      message: error.message,
      statusCode: error.status,
    };
    return res.status(error.status).send(message);
  }

  // Generic error handling
  console.log(error);
  const message = {
    message: "Internal Server Error",
    statusCode: httpStatus.INTERNAL_SERVER_ERROR,
  };
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(message);
}
