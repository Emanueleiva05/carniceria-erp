export class EntregaDetalle {
  public id: Number;
  public cantidad: Number;
  public precio_compra: Number;
  public producto_id: Number;
  public entrega_id: Number;

  constructor(
    id: Number,
    cantidad: Number,
    precio_compra: Number,
    producto_id: Number,
    entrega_id: Number
  ) {
    this.id = id;
    this.cantidad = cantidad;
    this.precio_compra = precio_compra;
    this.producto_id = producto_id;
    this.entrega_id = entrega_id;
  }
}
