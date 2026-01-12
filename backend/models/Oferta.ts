export class Oferta {
  public oferta_id: number;
  public minKg: number;
  public precio_oferta: number;
  public estaActivo: boolean;
  public producto_id: number;

  constructor(
    id: number,
    minKg: number,
    precio_oferta: number,
    estaActivo: boolean,
    producto_id: number
  ) {
    this.oferta_id = id;
    this.minKg = minKg;
    this.estaActivo = estaActivo;
    this.precio_oferta = precio_oferta;
    this.producto_id = producto_id;
  }

  cambiarEstado() {
    this.estaActivo = !this.estaActivo;
  }
}
