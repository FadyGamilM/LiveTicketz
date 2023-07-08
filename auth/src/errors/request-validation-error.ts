import { ValidationError } from "express-validator";
class RequestValidationError extends Error {
  // ! Initialize class attributes
  constructor(public errors: ValidationError[], public statusCode: number) {
    super();

    // when we extend a built-in class, we have to write this line of code
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  // ! public method to serialize and format the errors
  public SerializeErrors() {
    // => return array of objects
    return this.errors.map((error) => {
      if (error.type === "field") {
        return {
          message: error.msg,
          field: error.path,
        };
      }
    });
  }
}

export { RequestValidationError };
