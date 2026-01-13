import { EntregaDetalle } from "./EntregaDetalle";

export default class Entrega {
  public readonly entrega_id: number | null;
  public readonly fechaEntrega: Date;
  public total: number;
  public pago: boolean;
  public factura: string;
  public proveedor_id: number;

  constructor(
    id: number | null,
    fechaEntrega: Date,
    pago: boolean,
    total: number,
    factura: string,
    proveedor_id: number
  ) {
    this.entrega_id = id;
    this.fechaEntrega = fechaEntrega;
    this.total = total;
    this.pago = pago;
    this.factura = factura;
    this.proveedor_id = proveedor_id;
  }

  static create(proveedor_id: number) {
    return new Entrega(null, new Date(), false, 0, "", proveedor_id);
  }

  pagado() {
    this.pago = true;
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
