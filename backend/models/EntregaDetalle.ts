import BadRequest from "../error/BadRequest";
import { EntregaDetalle as EntregaDetalleType } from "../utils/contracts";

export class EntregaDetalle {
  public readonly id: number | null;
  public cantidad: number;
  public precio_compra: number;
  public producto_id: number;
  public entrega_id: number;

  constructor(
    id: number | null,
    cantidad: number,
    precio_compra: number,
    producto_id: number,
    entrega_id: number,
  ) {
    this.id = id;
    this.cantidad = cantidad;
    this.precio_compra = precio_compra;
    this.producto_id = producto_id;
    this.entrega_id = entrega_id;
  }

  static create(
    cantidad: number,
    precio_compra: number,
    producto_id: number,
    entrega_id: number,
  ) {
    if (cantidad <= 0) {
      throw new BadRequest("Cantidad");
    }

    if (precio_compra <= 0) {
      throw new BadRequest("Precio de compra");
    }

    return new EntregaDetalle(
      null,
      cantidad,
      precio_compra,
      producto_id,
      entrega_id,
    );
  }

  static fromPersistence(detalle: EntregaDetalleType) {
    const detalleEntrega = new EntregaDetalle(
      detalle.entregaDetalle_id,
      detalle.cantidad,
      detalle.precio_compra,
      detalle.producto_id,
      detalle.entrega_id,
    );

    return detalleEntrega;
  }

  calculateSubtotal() {
    return this.cantidad * this.precio_compra;
  }
}
