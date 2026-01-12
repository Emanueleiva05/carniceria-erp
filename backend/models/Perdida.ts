import { UnidadMedida } from "../utils/tipos";
import { Producto } from "./Producto";

export class Perdida {
  public perdida_id: number;
  public tirado: number;
  public unidad: UnidadMedida;
  public fechaPerdida: Date;
  public motivo: string;
  public total: number;
  public producto_id: number;

  constructor(
    id: number,
    tirado: number,
    unidad: UnidadMedida,
    fechaPerdida: Date,
    motivo: string,
    total: number,
    producto_id: number
  ) {
    this.perdida_id = id;
    this.tirado = tirado;
    this.unidad = unidad;
    this.fechaPerdida = fechaPerdida;
    this.motivo = motivo;
    this.total = 0;
    this.producto_id = producto_id;
  }

  calcularTotal(producto: Producto) {
    return this.tirado * producto.precio_venta;
  }

  agregarMotivo(motivo: string) {
    this.motivo = motivo;
  }
}
