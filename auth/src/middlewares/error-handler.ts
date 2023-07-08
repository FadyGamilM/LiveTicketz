import { log } from "console";
import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { AppError } from "../errors/types/app-error";
import { ValidationError } from "express-validator";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // log("Error handler has catched this error => ", err);

  if (err instanceof RequestValidationError) {
    let formattedErrors = err.errors.map((error: ValidationError) => {
      if (error.type === "field") {
        return {
          message: error.msg,
          field: error.path,
        };
      }
    });
    return res.status(400).send(formattedErrors);
  }

  if (err instanceof DatabaseConnectionError) {
    let formattedErrors = {
      errors: [
        {
          message: err.error,
        },
      ],
    };
  }
  return res.status(400).send({
    msg: err.message,
    error: err,
  });
};

export { errorHandler };
