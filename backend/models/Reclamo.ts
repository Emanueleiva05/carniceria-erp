import { ReclamoPersistence } from "../repository/reclamoRepository";
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
  cantidad: number;
  producto_destino_id: number | null;
  diferencia_cantidad: number | null;
  descripcion: string | null;
  evidencia: string | null;
  producto_id: number;
  proveedor_id: number;

  constructor(
    id: number | null,
    fechaReclamo: Date,
    motivo: ReclamoMotivo,
    estado: ReclamoEstado,
    cantidad: number,
    producto_destino_id: number | null,
    diferencia_cantidad: number | null,
    producto_id: number,
    proveedor_id: number,
    evidencia: string | null,
    descripcion: string | null,
  ) {
    this.reclamo_id = id;
    this.fecha_reclamo = fechaReclamo;
    this.motivo = motivo;
    this.cantidad = cantidad;
    this.estado = estado;
    this.producto_destino_id = producto_destino_id;
    this.diferencia_cantidad = diferencia_cantidad;
    this.producto_id = producto_id;
    this.proveedor_id = proveedor_id;
    this.evidencia = evidencia;
    this.descripcion = descripcion;
  }

  static create(
    motivo: ReclamoMotivo,
    cantidad: number,
    producto_destino_id: number | null,
    diferencia_cantidad: number | null,
    producto_id: number,
    proveedor_id: number,
  ) {
    if (producto_id <= 0) {
      throw new Error("Producto ID invalido");
    }

    if (proveedor_id <= 0) {
      throw new Error("Proveedor ID invalido");
    }

    if (cantidad <= 0) {
      throw new Error("Cantidad invalido");
    }

    return new Reclamo(
      null,
      new Date(),
      motivo,
      ReclamoEstado.PENDIENTE,
      cantidad,
      producto_destino_id,
      diferencia_cantidad,
      producto_id,
      proveedor_id,
      null,
      null,
    );
  }

  static fromPersistence(reclamoRaw: ReclamoPersistence) {
    const motivo = transformToReclamoMotivo(reclamoRaw.motivo);
    const estado = transformToReclamoEstado(reclamoRaw.estado);

    const reclamo = new Reclamo(
      reclamoRaw.reclamo_id,
      reclamoRaw.fecha_reclamo,
      motivo,
      estado,
      reclamoRaw.cantidad,
      reclamoRaw.producto_destino_id,
      reclamoRaw.diferencia_cantidad,
      reclamoRaw.cantidad,
      reclamoRaw.proveedor_id,
      reclamoRaw.evidencia,
      reclamoRaw.descripcion,
    );

    return reclamo;
  }

  changeEstadoAceptado() {
    this.estado = ReclamoEstado.ACEPTADA;
  }

  changeEstadoRechazado() {
    this.estado = ReclamoEstado.RECHAZADA;
  }
}
