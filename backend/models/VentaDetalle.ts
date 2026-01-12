import { Oferta } from "./Oferta";

export class VentaDetalla {
  public detalle_id: number;
  public precio_unitario: number;
  public cantidad: number;
  public subtotal: number;
  public producto_id: number;
  public venta_id: number;
  public oferta_id: number;

  constructor(
    id: number,
    precio_unitario: number,
    cantidad: number,
    subtotal: number,
    producto_id: number,
    venta_id: number,
    oferta_id: number
  ) {
    this.detalle_id = id;
    this.precio_unitario = precio_unitario;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.producto_id = producto_id;
    this.venta_id = venta_id;
    this.oferta_id = 0;
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
