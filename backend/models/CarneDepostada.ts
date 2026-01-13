export class CarneDepostada {
  public readonly carne_id: number | null;
  public peso_real: number;
  public readonly mediares_id: number;
  public readonly producto_id: number;

  constructor(
    carne_id: number | null,
    peso_real: number,
    mediares_id: number,
    producto_id: number
  ) {
    this.carne_id = carne_id;
    this.peso_real = peso_real;
    this.mediares_id = mediares_id;
    this.producto_id = producto_id;
  }

  static create(
    peso_real: number,
    mediares_id: number,
    producto_id: number
  ): CarneDepostada {
    if (peso_real <= 0) {
      throw new Error("Peso real inválido");
    }

    if (mediares_id <= 0) {
      throw new Error("Mediares inválido");
    }

    if (producto_id <= 0) {
      throw new Error("Producto inválido");
    }

    return new CarneDepostada(null, peso_real, mediares_id, producto_id);
  }
}
