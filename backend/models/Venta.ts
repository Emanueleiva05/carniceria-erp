export class Venta {
  public venta_id: Number;
  public fecha_venta: Date;
  public vendido: Boolean;
  public total: Number;

  constructor(id: Number, fecha_venta: Date, vendido: Boolean, total: Number) {
    this.venta_id = id;
    this.fecha_venta = fecha_venta;
    this.vendido = vendido;
    this.total = total;
  }
}
