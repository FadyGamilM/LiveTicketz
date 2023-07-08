type AppError = {
  errors: {
    message: string;
    field?: string;
  }[];
};

export { AppError };
