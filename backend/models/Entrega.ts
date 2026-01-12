import { EntregaDetalle } from "./EntregaDetalle";

export default class Entrega {
  public entrega_id: number;
  public fechaEntrega: Date;
  public total: number;
  public pago: boolean;
  public factura: string;
  public proveedor_id: number;

  constructor(
    id: number,
    fechaEntrega: Date,
    pago: boolean,
    factura: string,
    proveedor_id: number
  ) {
    this.entrega_id = id;
    this.fechaEntrega = fechaEntrega;
    this.total = 0;
    this.pago = pago;
    this.factura = factura;
    this.proveedor_id = proveedor_id;
  }

  cambioEstado() {
    this.pago = !this.pago;
  }

  agregarFactura(archivo: string) {
    this.factura = archivo;
  }

  cambiarProveedor(proveedor_id: number) {
    this.proveedor_id = proveedor_id;
  }

  calcularTotal(entregaDetalle: EntregaDetalle[]) {
    const total = entregaDetalle.reduce(
      (acu, sum) => acu + sum.calcularSubtotal(),
      0
    );

    if (total <= 0) {
      throw new Error("Hubo un problema con el calculo del total");
    }

    this.total = total;
  }
}
