import { VentaDetalla } from "./VentaDetalle";

export class Venta {
  public venta_id: number | null;
  public fecha_venta: Date;
  public vendido: boolean;

  constructor(id: number | null, fecha_venta: Date, vendido: boolean) {
    this.venta_id = id;
    this.fecha_venta = fecha_venta;
    this.vendido = vendido;
  }

  static create() {
    return new Venta(null, new Date(), false);
  }

  ventaRealizada() {
    this.vendido = true;
  }

  calcularTotal(ventaDetalle: VentaDetalla[]) {
    const total = ventaDetalle.reduce((acu, sum) => acu + sum.subtotal, 0);

    if (total <= 0) {
      throw new Error("Calculo del total es invalido");
    }

    return total;
  }
}
