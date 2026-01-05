import { UnidadMedida } from "../utils/tipos";

export class Perdida {
  public perdida_id: Number;
  public tirado: Number;
  public unidad: UnidadMedida;
  public fechaPerdida: Date;
  public motivo: String;
  public total: Number;
  public producto_id: Number;

  constructor(
    id: Number,
    tirado: Number,
    unidad: UnidadMedida,
    fechaPerdida: Date,
    motivo: String,
    total: Number,
    producto_id: Number
  ) {
    this.perdida_id = id;
    this.tirado = tirado;
    this.unidad = unidad;
    this.fechaPerdida = fechaPerdida;
    this.motivo = motivo;
    this.total = total;
    this.producto_id = producto_id;
  }
}
