import AppError from "./AppError";

class ServerError extends AppError {
  constructor(message: string) {
    super(message, 500, "Server Error");
  }
}

export default ServerError;
