import { UnidadMedida } from "../utils/tipos";

export class Perdida {
  public perdida_id: number | null;
  public tirado: number;
  public unidad: UnidadMedida;
  public fechaPerdida: Date;
  public motivo: string | null;
  public total: number;
  public producto_id: number;

  constructor(
    id: number | null,
    tirado: number,
    unidad: UnidadMedida,
    fechaPerdida: Date,
    motivo: string | null,
    total: number,
    producto_id: number
  ) {
    this.perdida_id = id;
    this.tirado = tirado;
    this.unidad = unidad;
    this.fechaPerdida = fechaPerdida;
    this.motivo = motivo;
    this.total = total;
    this.producto_id = producto_id;
  }

  static create(tirado: number, unidad: UnidadMedida, producto_id: number) {
    if (tirado <= 0) {
      throw new Error("Tirado invalido");
    }
    if (producto_id <= 0) {
      throw new Error("Producto ID invalido");
    }

    return new Perdida(null, tirado, unidad, new Date(), null, 0, producto_id);
  }

  calcularTotal(precio_venta: number) {
    if (precio_venta <= 0) {
      throw new Error("Precio venta invalido");
    }

    this.total = this.tirado * precio_venta;
  }

  agregarMotivo(motivo: string) {
    this.motivo = motivo;
  }
}
