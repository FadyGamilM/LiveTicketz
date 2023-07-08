import { AppError } from "./app-error";

class DatabaseConnectionError extends AppError {
  statusCode: number;
  // ! Initialize class attributes
  constructor(public error: string) {
    super("database connection error");
    this.statusCode = 500;

    // when we extend a built-in class, we have to write this line of code
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  // ! public method to serialize and format the errors
  public SerializeErrors() {
    // => return array of objects
    return [
      {
        message: this.error,
      },
    ];
  }
}

export { DatabaseConnectionError };
