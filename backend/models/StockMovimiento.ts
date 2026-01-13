import { TipoMovimiento, Operacion, TipoReferencia } from "../utils/tipos";

export class StockMovimiento {
  public movimiento_id: number | null;
  public cantidad: number;
  public tipo: TipoMovimiento;
  public motivo: Operacion;
  public referencia_id: number;
  public referencia_tipo: TipoReferencia;
  public producto_id: number;

  constructor(
    id: number | null,
    cantidad: number,
    tipo: TipoMovimiento,
    motivo: Operacion,
    referencia_id: number,
    referencia_tipo: TipoReferencia,
    producto_id: number
  ) {
    this.movimiento_id = id;
    this.cantidad = cantidad;
    this.tipo = tipo;
    this.motivo = motivo;
    this.referencia_id = referencia_id;
    this.referencia_tipo = referencia_tipo;
    this.producto_id = producto_id;
  }

  static create(
    cantidad: number,
    tipo: TipoMovimiento,
    motivo: Operacion,
    referencia_id: number,
    referencia_tipo: TipoReferencia,
    producto_id: number
  ) {
    if (cantidad <= 0) {
      throw new Error("Cantidad invalido");
    }

    if (referencia_id <= 0) {
      throw new Error("Referencia ID invalido");
    }

    if (producto_id <= 0) {
      throw new Error("Producto ID invalido");
    }

    return new StockMovimiento(
      null,
      cantidad,
      tipo,
      motivo,
      referencia_id,
      referencia_tipo,
      producto_id
    );
  }
}
