import BadRequest from "../error/BadRequest";
import { Carne } from "../utils/contracts";

export class CarneDepostada {
  public readonly carne_id: number | null;
  public peso_real: number;
  public readonly mediares_id: number;
  public readonly producto_id: number;

  constructor(
    carne_id: number | null,
    peso_real: number,
    mediares_id: number,
    producto_id: number,
  ) {
    this.carne_id = carne_id;
    this.peso_real = peso_real;
    this.mediares_id = mediares_id;
    this.producto_id = producto_id;
  }

  static create(
    peso_real: number,
    mediares_id: number,
    producto_id: number,
  ): CarneDepostada {
    if (peso_real <= 0) {
      throw new BadRequest("Peso de la carne depostada");
    }
    return new CarneDepostada(null, peso_real, mediares_id, producto_id);
  }

  static fromPersistence(data: Carne) {
    const carne = new CarneDepostada(
      data.carne_id,
      data.peso_real,
      data.mediares_id,
      data.producto_id,
    );
    return carne;
  }
}
