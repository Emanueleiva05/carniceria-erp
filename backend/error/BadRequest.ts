import AppError from "./AppError";

class BadRequest extends AppError {
  constructor(message: string) {
    super(
      `El ${message} es invalido, asegurese de ingresar un dato valido`,
      400,
      "Bad Request",
    );
  }
}

export default BadRequest;
