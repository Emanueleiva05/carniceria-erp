export class CarneDepostada {
  public carne_id: Number;
  public peso_real: Number;
  public mediares_id: Number;
  public producto_id: Number;

  constructor(
    id: Number,
    peso_real: Number,
    mediares_id: Number,
    producto_id: Number
  ) {
    this.carne_id = id;
    this.peso_real = peso_real;
    this.mediares_id = mediares_id;
    this.producto_id = producto_id;
  }
}
