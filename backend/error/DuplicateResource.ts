import AppError from "./AppError";

class DuplicateResource extends AppError {
  constructor(message: string) {
    super(`El recurso: ${message} ya esta creado`, 409, "Duplicate resource");
  }
}

export default DuplicateResource;
