import { TipoMovimiento, Operacion, TipoReferencia } from "../utils/tipos";

export class StockMovimiento {
  public movimiento_id: Number;
  public cantidad: Number;
  public tipo: TipoMovimiento;
  public motivo: Operacion;
  public referencia_id: Number;
  public referencia_tipo: TipoReferencia;
  public producto_id: Number;

  constructor(
    id: Number,
    cantidad: Number,
    tipo: TipoMovimiento,
    motivo: Operacion,
    referencia_id: Number,
    referencia_tipo: TipoReferencia,
    producto_id: Number
  ) {
    this.movimiento_id = id;
    this.cantidad = cantidad;
    this.tipo = tipo;
    this.motivo = motivo;
    this.referencia_id = referencia_id;
    this.referencia_tipo = referencia_tipo;
    this.producto_id = producto_id;
  }
}
