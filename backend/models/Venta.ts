import { VentaDetalla } from "./VentaDetalle";

export class Venta {
  public venta_id: number;
  public fecha_venta: Date;
  public vendido: boolean;
  public total: number;

  constructor(id: number, fecha_venta: Date, vendido: boolean, total: number) {
    this.venta_id = id;
    this.fecha_venta = new Date();
    this.vendido = vendido;
    this.total = total;
  }

  cambiarEstado() {
    this.vendido = !this.vendido;
  }

  calcularTotal(ventaDetalle: VentaDetalla[]) {
    const total = ventaDetalle.reduce((acu, sum) => acu + sum.subtotal, 0);

    if (total <= 0) {
      throw new Error("Calculo del total es invalido");
    }

    this.total = total;
  }
}
