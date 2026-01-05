export default class Entrega {
  public entrega_id: Number;
  public fechaEntrega: Date;
  public total: Number;
  public pago: Boolean;
  public factura: String;
  public proveedor_id: Number;

  constructor(
    id: Number,
    fechaEntrega: Date,
    total: Number,
    pago: Boolean,
    factura: String,
    proveedor_id: Number
  ) {
    this.entrega_id = id;
    this.fechaEntrega = fechaEntrega;
    this.total = total;
    this.pago = pago;
    this.factura = factura;
    this.proveedor_id = proveedor_id;
  }
}
