import AppError from "./AppError";

class NotFound extends AppError {
  constructor(message: string) {
    super(`No se encontro: ${message}`, 404, "Not Found");
  }
}

export default NotFound;
