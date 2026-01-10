import AppError from "./AppError";

class BadRequest extends AppError {
  constructor(message: string) {
    super(`Es invalido el parametro: ${message}`, 400, "Bad Request");
  }
}

export default BadRequest;
