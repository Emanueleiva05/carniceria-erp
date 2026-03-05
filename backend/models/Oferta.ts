import { Oferta as OfertaType } from "../utils/contracts";

export class Oferta {
  public oferta_id: number | null;
  public minKg: number;
  public precio_oferta: number;
  public estaActivo: boolean;
  public producto_id: number;

  constructor(
    id: number | null,
    minKg: number,
    precio_oferta: number,
    estaActivo: boolean,
    producto_id: number,
  ) {
    this.oferta_id = id;
    this.minKg = minKg;
    this.estaActivo = estaActivo;
    this.precio_oferta = precio_oferta;
    this.producto_id = producto_id;
  }

  static create(minKg: number, precio_oferta: number, producto_id: number) {
    if (minKg <= 0) {
      throw new Error("El minimo de kilos ingresado de la oferta es invalido");
    }

    if (precio_oferta <= 0) {
      throw new Error("El precio de la oferta ingresada es invalida");
    }

    return new Oferta(null, minKg, precio_oferta, true, producto_id);
  }

  static fromPersistence(ofertaRaw: OfertaType) {
    const oferta = new Oferta(
      ofertaRaw.oferta_id,
      ofertaRaw.minKg,
      ofertaRaw.precio_oferta,
      ofertaRaw.esta_activo,
      ofertaRaw.producto_id,
    );
    return oferta;
  }

  inactive() {
    this.estaActivo = false;
  }
}
