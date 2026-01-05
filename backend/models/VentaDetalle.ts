export class VentaDetalla {
  public detalle_id: Number;
  public precio_unitario: Number;
  public cantidad: Number;
  public subtotal: Number;
  public producto_id: Number;
  public venta_id: Number;
  public oferta_id: Number;

  constructor(
    id: Number,
    precio_unitario: Number,
    cantidad: Number,
    subtotal: Number,
    producto_id: Number,
    venta_id: Number,
    oferta_id: Number
  ) {
    this.detalle_id = id;
    this.precio_unitario = precio_unitario;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.producto_id = producto_id;
    this.venta_id = venta_id;
    this.oferta_id = oferta_id;
  }
}
