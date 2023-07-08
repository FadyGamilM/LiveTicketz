import { ValidationError } from "express-validator";
import { AppError } from "./app-error";
import { CustomErrorsType } from "./types/app-error-type";
class RequestValidationError extends AppError {
  statusCode: number;
  // ! Initialize class attributes
  constructor(public errors: ValidationError[]) {
    super("Invalid email or password");
    this.statusCode = 400;

    // when we extend a built-in class, we have to write this line of code
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  // ! public method to serialize and format the errors
  public SerializeErrors() {
    // => return array of objects
    // let formattedErrors = [{ message: "", field: "" }];
    let formattedErrors: CustomErrorsType = [];
    this.errors.forEach((error) => {
      if (error.type === "field") {
        formattedErrors.push({
          message: error.msg,
          field: error.path,
        });
      }
    });
    return formattedErrors;
  }
}

export { RequestValidationError };
