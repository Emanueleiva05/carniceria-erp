import AppError from "./AppError";

class BussinesRuleViolation extends AppError {
  constructor(message: string) {
    super(`${message}`, 422, "Bussines rule violation");
  }
}

export default BussinesRuleViolation;
