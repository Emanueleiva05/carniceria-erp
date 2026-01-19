import AppError from "../error/AppError";
import { ProductoPersistence } from "../repository/productoRepository";
import { MovimientoPersistence } from "../repository/stockMovimientoRepository";
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
    tipo: TipoMovimiento,
    motivo: Operacion,
    referencia_id: number,
    referencia_tipo: TipoReferencia,
    producto_id: number,
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
      producto_id,
    );
  }

  static fromPersistence(movimientoRaw: MovimientoPersistence) {
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

  calcularStock(producto: ProductoPersistence): number {
    if (this.tipo === "Entrada") {
      return producto.stock_actual + this.cantidad;
    }

    if (producto.stock_actual < this.cantidad) {
      throw new AppError(
        "La cantidad vendida es menor al stock actual",
        400,
        "LogicNegocio",
      );
    }

    if (this.tipo === "Salida") {
      return producto.stock_actual - this.cantidad;
    }

    return producto.stock_actual;
  }
}
