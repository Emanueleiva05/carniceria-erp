import AppError from "./AppError";

class BadRequest extends AppError {
  constructor(message: string) {
    super(`El ${message} es invalido`, 400, "Bad Request");
  }
}

export default BadRequest;
