class DatabaseConnectionError extends Error {
  // ! Initialize class attributes
  constructor(public error: string, public statusCode: number) {
    super();
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
