export class CarneDepostada {
  public carne_id: number;
  public peso_real: number;
  public mediares_id: number;
  public producto_id: number;

  constructor(
    id: number,
    peso_real: number,
    mediares_id: number,
    producto_id: number
  ) {
    this.carne_id = id;

    if (peso_real <= 0) {
      throw new Error("Peso real es invalido");
    }

    this.peso_real = peso_real;
    this.mediares_id = mediares_id;
    this.producto_id = producto_id;
  }
}
