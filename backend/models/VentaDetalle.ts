import { Oferta } from "../utils/contracts";
import { VentaDetalle as VentaDetalleType } from "../utils/contracts";

export class VentaDetalla {
  public detalle_id: number | null;
  public precio_unitario: number;
  public cantidad: number;
  public subtotal: number;
  public producto_id: number;
  public venta_id: number;
  public oferta_id: number | null;

  constructor(
    id: number | null,
    precio_unitario: number,
    cantidad: number,
    subtotal: number,
    producto_id: number,
    venta_id: number,
    oferta_id: number | null,
  ) {
    this.detalle_id = id;
    this.precio_unitario = precio_unitario;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.producto_id = producto_id;
    this.venta_id = venta_id;
    this.oferta_id = oferta_id;
  }

  static create(
    precio_unitario: number,
    cantidad: number,
    producto_id: number,
    venta_id: number,
  ) {
    if (precio_unitario <= 0) {
      throw new Error(
        "El precio unitario ingresado de la venta detalle es invalido",
      );
    }

    if (cantidad <= 0) {
      throw new Error("La cantidad ingresada de la venta detalle es invalida");
    }

    return new VentaDetalla(
      null,
      precio_unitario,
      cantidad,
      0,
      producto_id,
      venta_id,
      null,
    );
  }

  static fromPersistence(ventaDetalleRaw: VentaDetalleType) {
    const detalle = new VentaDetalla(
      ventaDetalleRaw.ventaDetalle_id,
      ventaDetalleRaw.precio_unitario,
      ventaDetalleRaw.cantidad,
      ventaDetalleRaw.subtotal,
      ventaDetalleRaw.producto_id,
      ventaDetalleRaw.venta_id,
      ventaDetalleRaw.oferta_id,
    );
    return detalle;
  }

  calculateSubtotal() {
    this.subtotal = this.cantidad * this.precio_unitario;
  }

  applyOffer(ofertas: Oferta) {
    if (this.cantidad < ofertas.minKg) {
      return;
    }

    this.precio_unitario = ofertas.precio_oferta;
    this.oferta_id = ofertas.oferta_id;
    this.calculateSubtotal();
  }
}
