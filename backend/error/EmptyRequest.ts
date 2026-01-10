import AppError from "./AppError";

class EmptyRequest extends AppError {
  constructor(message: string) {
    super(`No se ingreso el parametro: ${message}`, 400, "Empty Request");
  }
}

export default EmptyRequest;
