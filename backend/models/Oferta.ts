export class Oferta {
  public oferta_id: Number;
  public minKg: Number;
  public precio_oferta: Number;
  public estaActivo: Boolean;
  public producto_id: Number;

  constructor(
    id: Number,
    minKg: Number,
    precio_oferta: Number,
    estaActivo: Boolean,
    producto_id: Number
  ) {
    this.oferta_id = id;
    this.minKg = minKg;
    this.estaActivo = estaActivo;
    this.precio_oferta = precio_oferta;
    this.producto_id = producto_id;
  }
}
