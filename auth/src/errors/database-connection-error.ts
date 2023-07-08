class DatabaseConnectionError extends Error {
  constructor(public error: string) {
    super();

    // when we extend a built-in class, we have to write this line of code
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}

export { DatabaseConnectionError };
