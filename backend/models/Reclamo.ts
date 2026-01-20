import { ReclamoPrisma } from "../repository/reclamoRepository";
import {
  ReclamoEstado,
  ReclamoMotivo,
  transformToReclamoEstado,
  transformToReclamoMotivo,
} from "../utils/tipos";

export default class Reclamo {
  reclamo_id: number | null;
  fecha_reclamo: Date;
  motivo: ReclamoMotivo;
  estado: ReclamoEstado;
  genera_perdida: boolean;
  genera_compensacion: boolean;
  descripcion: string | null;
  evidencia: string | null;
  producto_id: number;
  proveedor_id: number;

  constructor(
    id: number | null,
    fechaReclamo: Date,
    motivo: ReclamoMotivo,
    estado: ReclamoEstado,
    generaPerdida: boolean,
    generaCompensacion: boolean,
    producto_id: number,
    proveedor_id: number,
    evidencia: string | null,
    descripcion: string | null,
  ) {
    this.reclamo_id = id;
    this.fecha_reclamo = fechaReclamo;
    this.motivo = motivo;
    this.estado = estado;
    this.genera_perdida = generaPerdida;
    this.genera_compensacion = generaCompensacion;
    this.producto_id = producto_id;
    this.proveedor_id = proveedor_id;
    this.evidencia = evidencia;
    this.descripcion = descripcion;
  }

  static create(
    motivo: ReclamoMotivo,
    estado: ReclamoEstado,
    genera_perdida: boolean,
    genera_compensacion: boolean,
    producto_id: number,
    proveedor_id: number,
  ) {
    if (producto_id <= 0) {
      throw new Error("Producto ID invalido");
    }

    if (proveedor_id <= 0) {
      throw new Error("Proveedor ID invalido");
    }

    return new Reclamo(
      null,
      new Date(),
      motivo,
      estado,
      genera_perdida,
      genera_compensacion,
      producto_id,
      proveedor_id,
      null,
      null,
    );
  }

  static fromPersistence(reclamoRaw: ReclamoPrisma) {
    const motivo = transformToReclamoMotivo(reclamoRaw.motivo);
    const estado = transformToReclamoEstado(reclamoRaw.estado);

    const reclamo = new Reclamo(
      reclamoRaw.reclamo_id,
      reclamoRaw.fecha_reclamo,
      motivo,
      estado,
      reclamoRaw.genera_perdida,
      reclamoRaw.genera_compensacion,
      reclamoRaw.producto_id,
      reclamoRaw.proveedor_id,
      reclamoRaw.evidencia,
      reclamoRaw.descripcion,
    );

    return reclamo;
  }
}
