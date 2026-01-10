class AppError extends Error {
  public status: number;

  constructor(message: string, status: number, nameError: string) {
    super(message);
    this.status = status;
    this.name = nameError;
  }
}

export default AppError;
