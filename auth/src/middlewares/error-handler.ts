import { log } from "console";
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  log("Error handler has catched this error => ", err);
  res.status(400).send({
    msg: err.message,
    error: err,
  });
};

export { errorHandler };
