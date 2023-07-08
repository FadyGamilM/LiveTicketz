import { ValidationError } from "express-validator";
class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // when we extend a built-in class, we have to write this line of code
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

export { RequestValidationError };
