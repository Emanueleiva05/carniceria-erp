import { VentaDetallePersistence } from "../repository/ventaDetalleRepository";
import { Oferta } from "./Oferta";

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
      throw new Error("Precio unitario invalido");
    }

    if (cantidad <= 0) {
      throw new Error("Cantidad invalido");
    }

    if (producto_id <= 0) {
      throw new Error("Producto ID invalido");
    }

    if (venta_id <= 0) {
      throw new Error("Venta ID invalido");
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

  static fromPersistence(ventaDetalleRaw: VentaDetallePersistence) {
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

  calcularSubtotal() {
    this.subtotal = this.cantidad * this.precio_unitario;
  }

  agregarOferta(ofertas: Oferta[]) {
    const oferta = ofertas.find((of) => of.producto_id === this.producto_id);

    if (!oferta) {
      return "No hay oferta con ese producto especifico";
    }

    if (this.cantidad < oferta.minKg) {
      return "No llega a los kilos minimos para acceder a la oferta";
    }

    this.precio_unitario = oferta.precio_oferta;
  }
}
