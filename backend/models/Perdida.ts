import { transformToUnidadMedida, UnidadMedida } from "../utils/tipos";
import { Perdida as PerdidaType } from "../utils/contracts";

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
    producto_id: number,
  ) {
    this.perdida_id = id;
    this.tirado = tirado;
    this.unidad = unidad;
    this.fechaPerdida = fechaPerdida;
    this.motivo = motivo;
    this.total = total;
    this.producto_id = producto_id;
  }

  static create(tirado: number, unidad: string, producto_id: number) {
    if (tirado <= 0) {
      throw new Error("La cantidad tirada ingresada de la perdida es invalida");
    }

    const unidadPer = transformToUnidadMedida(unidad);

    return new Perdida(
      null,
      tirado,
      unidadPer,
      new Date(),
      null,
      0,
      producto_id,
    );
  }

  static fromPersistence(perdidaRaw: PerdidaType) {
    const unidadMedida = transformToUnidadMedida(perdidaRaw.unidad_medida);

    const perdida = new Perdida(
      perdidaRaw.perdida_id,
      perdidaRaw.tirado,
      unidadMedida,
      perdidaRaw.fecha_perdida,
      perdidaRaw.motivo,
      perdidaRaw.total,
      perdidaRaw.producto_id,
    );
    return perdida;
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
