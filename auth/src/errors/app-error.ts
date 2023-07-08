abstract class AppError extends Error {
  abstract statusCode: number;
  abstract SerializeErrors(): { message: string; field?: string }[];
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export { AppError };
