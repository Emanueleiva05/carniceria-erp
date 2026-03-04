import { Producto } from "../utils/contracts";
import { StockMovimiento as StockMovimientoType } from "../utils/contracts";
import {
  TipoMovimiento,
  Operacion,
  TipoReferencia,
  transformToTipoMovimiento,
  transformToOperacion,
  transformToTipoReferencia,
} from "../utils/tipos";

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
    producto_id: number,
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
    tipo: string,
    motivo: string,
    referencia_id: number,
    referencia_tipo: string,
    producto_id: number,
  ) {
    if (tipo !== TipoMovimiento.AJUSTE) {
      if (cantidad <= 0) {
        throw new Error(
          "La cantidad ingresada de stock que esta en movimiento es invalida",
        );
      }
    }

    const tipoMov = transformToTipoMovimiento(tipo);
    const motivoMov = transformToOperacion(motivo);
    const referenciaTipo = transformToTipoReferencia(referencia_tipo);

    return new StockMovimiento(
      null,
      cantidad,
      tipoMov,
      motivoMov,
      referencia_id,
      referenciaTipo,
      producto_id,
    );
  }

  static fromPersistence(movimientoRaw: StockMovimientoType) {
    const tipoMovimiento = transformToTipoMovimiento(
      movimientoRaw.tipo_movimiento,
    );
    const motivo = transformToOperacion(movimientoRaw.motivo);
    const tipoReferencia = transformToTipoReferencia(
      movimientoRaw.referencia_tipo,
    );

    const movimiento = new StockMovimiento(
      movimientoRaw.movimiento_id,
      movimientoRaw.cantidad,
      tipoMovimiento,
      motivo,
      movimientoRaw.referencia_id,
      tipoReferencia,
      movimientoRaw.producto_id,
    );

    return movimiento;
  }

  calcularStock(producto: Producto): number {
    if (this.tipo === TipoMovimiento.ENTRADA) {
      return producto.stock_actual + this.cantidad;
    }

    if (this.tipo === TipoMovimiento.SALIDA) {
      if (producto.stock_actual < this.cantidad) {
        throw new Error("Stock insuficiente para realizar la operación");
      }
      return producto.stock_actual - this.cantidad;
    }

    if (this.tipo === TipoMovimiento.AJUSTE) {
      return producto.stock_actual + this.cantidad;
    }

    return producto.stock_actual;
  }
}
