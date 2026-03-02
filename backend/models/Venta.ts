import { VentaPrisma } from "../repository/ventaRepository";
import { VentaDetalla } from "./VentaDetalle";

export class Venta {
  public venta_id: number | null;
  public fecha_venta: Date;
  public total: number;
  public vendido: boolean;

  constructor(
    id: number | null,
    fecha_venta: Date,
    vendido: boolean,
    total: number,
  ) {
    this.venta_id = id;
    this.fecha_venta = fecha_venta;
    this.vendido = vendido;
    this.total = total;
  }

  static create() {
    return new Venta(null, new Date(), false, 0);
  }

  static fromPersistence(ventaRaw: VentaPrisma) {
    const venta = new Venta(
      ventaRaw.venta_id,
      ventaRaw.fecha_venta,
      ventaRaw.esta_vendida,
      ventaRaw.total,
    );

    return venta;
  }

  ventaRealizada() {
    this.vendido = true;
  }

  calcularTotal(ventaDetalle: VentaDetalla[]) {
    const total = ventaDetalle.reduce((acu, sum) => acu + sum.subtotal, 0);

    if (total <= 0) {
      throw new Error("Calculo del total es invalido");
    }

    this.total = total;
  }
}
