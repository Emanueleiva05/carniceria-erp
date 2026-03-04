import BussinesRuleViolation from "../error/BussinesRuleViolation";
import NotFound from "../error/NotFound";
import BadRequest from "../error/BadRequest";
import Reclamo from "../models/Reclamo";
import reclamoRepository from "../repository/reclamoRepository";
import { Reclamo as ReclamoType } from "../utils/contracts";
import { PerdidaInput, ReclamoInput } from "../utils/contracts";
import {
  ReclamoEstado,
  ReclamoMotivo,
  transformToOperacion,
  transformToTipoMovimiento,
  transformToTipoReferencia,
  transformToUnidadMedida,
} from "../utils/tipos";
import { setPerdida } from "./perdidaServices";
import { getProductoById } from "./productoService";
import { getProveedoresById } from "./proveedorService";
import { setMovimiento } from "./stockMovimientoServices";

export const setReclamo = async (data: ReclamoInput) => {
  await getProveedoresById(data.proveedor_id);
  await getProductoById(data.producto_id);

  const reclamo = Reclamo.create(
    data.motivo,
    data.cantidad,
    data.producto_destino_id,
    data.diferencia_cantidad,
    data.producto_id,
    data.proveedor_id,
  );

  const saved = await reclamoRepository.save({
    fecha_reclamo: reclamo.fecha_reclamo,
    motivo: reclamo.motivo,
    estado: reclamo.estado,
    cantidad: reclamo.cantidad,
    producto_destino_id: reclamo.producto_destino_id,
    diferencia_cantidad: reclamo.diferencia_cantidad,
    descripcion: reclamo.descripcion,
    evidencia: reclamo.evidencia,
    producto_id: reclamo.producto_id,
    proveedor_id: reclamo.proveedor_id,
  });

  return saved;
};

export const updateReclamo = async (id: number, data: ReclamoInput) => {
  await getProveedoresById(data.proveedor_id);
  await getProductoById(data.producto_id);
  return await reclamoRepository.update(id, data);
};

export const deleteReclamo = async (id: number) => {
  return await reclamoRepository.delete(id);
};

export const getReclamoById = async (id: number) => {
  const reclamo = await reclamoRepository.findById(id);

  if (!reclamo) {
    throw new NotFound("Reclamo");
  }

  return reclamo;
};

export const getReclamos = async () => {
  const reclamos = await reclamoRepository.findAll();

  if (reclamos.length === 0) {
    throw new NotFound("Reclamos");
  }

  return reclamos;
};

export const getReclamosByProveedor = async (
  proveedorId: number,
): Promise<ReclamoType[]> => {
  const reclamos = await reclamoRepository.findByProveedor(proveedorId);

  if (reclamos.length === 0) {
    throw new NotFound("Reclamos para ese proveedor");
  }

  return reclamos;
};

export const acceptReclamo = async (reclamo_id: number) => {
  const reclamoRaw = await getReclamoById(reclamo_id);

  if (!reclamoRaw) {
    throw new NotFound("Reclamo");
  }

  if (reclamoRaw.estado !== ReclamoEstado.PENDIENTE) {
    throw new BussinesRuleViolation("El reclamo ya fue procesado");
  }

  const reclamo = Reclamo.fromPersistence({
    reclamo_id: reclamoRaw.reclamo_id,
    fecha_reclamo: reclamoRaw.fecha_reclamo,
    motivo: reclamoRaw.motivo,
    estado: reclamoRaw.estado,
    cantidad: reclamoRaw.cantidad,
    diferencia_cantidad: reclamoRaw.diferencia_cantidad,
    producto_destino_id: reclamoRaw.producto_destino_id,
    descripcion: reclamoRaw.descripcion,
    evidencia: reclamoRaw.evidencia,
    producto_id: reclamoRaw.producto_id,
    proveedor_id: reclamoRaw.proveedor_id,
  });

  reclamo.changeEstadoAceptado();

  const saved = await reclamoRepository.updateEstado(reclamo_id, {
    estado: reclamo.estado,
  });

  console.log(saved);

  await procesarReclamoAceptado(saved);

  return saved;
};

export const rejectReclamo = async (reclamo_id: number) => {
  const reclamoRaw = await getReclamoById(reclamo_id);

  if (!reclamoRaw) {
    throw new NotFound("Reclamo");
  }

  if (reclamoRaw.estado !== ReclamoEstado.PENDIENTE) {
    throw new BussinesRuleViolation("El reclamo ya fue procesado");
  }

  const reclamo = Reclamo.fromPersistence({
    reclamo_id: reclamoRaw.reclamo_id,
    fecha_reclamo: reclamoRaw.fecha_reclamo,
    motivo: reclamoRaw.motivo,
    estado: reclamoRaw.estado,
    producto_destino_id: reclamoRaw.producto_destino_id,
    diferencia_cantidad: reclamoRaw.diferencia_cantidad,
    cantidad: reclamoRaw.cantidad,
    evidencia: reclamoRaw.evidencia,
    descripcion: reclamoRaw.descripcion,
    producto_id: reclamoRaw.producto_id,
    proveedor_id: reclamoRaw.proveedor_id,
  });

  reclamo.changeEstadoRechazado();

  const saved = await reclamoRepository.updateEstado(reclamo_id, {
    estado: reclamo.estado,
  });

  return saved;
};

const procesarReclamoAceptado = async (reclamo: ReclamoType) => {
  switch (reclamo.motivo) {
    case ReclamoMotivo.MAL_ESTADO:
    case ReclamoMotivo.OTRO:
    case ReclamoMotivo.PRODUCTO_PODRIDO:
    case ReclamoMotivo.VENCIDO:
      await generarPerdida(reclamo);
      break;
    case ReclamoMotivo.ERROR_CORTE:
      await compensarCorte(reclamo);
      break;

    case ReclamoMotivo.ERROR_PESO:
      await compersarPeso(reclamo);
      break;
  }
};

const generarPerdida = async (reclamo: ReclamoType) => {
  const producto = await getProductoById(reclamo.producto_id);

  const unidad_medida = transformToUnidadMedida(producto.unidad_medida);

  const perdida: PerdidaInput = {
    tirado: reclamo.cantidad,
    unidad_medida: unidad_medida,
    fecha_perdida: new Date(),
    motivo: null,
    total: 0,
    producto_id: reclamo.producto_id,
  };

  console.log(perdida);

  await setPerdida(perdida);
};

const compensarCorte = async (reclamo: ReclamoType) => {
  if (!reclamo.producto_destino_id) {
    throw new BadRequest("Producto");
  }

  const productoReclamado = await getProductoById(reclamo.producto_id);
  const productoAjuste = await getProductoById(reclamo.producto_destino_id);

  if (!productoAjuste) {
    throw new NotFound("Producto a ajustar");
  }

  if (!productoReclamado) {
    throw new NotFound("Producto reclamado");
  }

  const tipoMovimientoReclamo = transformToTipoMovimiento("Entrada");
  const operacionCorteReclamo = transformToOperacion("Devolucion");
  const tipoReferenciaReclamo = transformToTipoReferencia("Reclamo");

  const tipoMovimientoAjuste = transformToTipoMovimiento("Salida");
  const operacionCorteAjuste = transformToOperacion("Compra");
  const tipoReferenciaAjuste = transformToTipoReferencia("Reclamo");

  await setMovimiento({
    cantidad: reclamo.cantidad,
    tipo_movimiento: tipoMovimientoReclamo,
    motivo: operacionCorteReclamo,
    referencia_tipo: tipoReferenciaReclamo,
    referencia_id: reclamo.reclamo_id,
    producto_id: reclamo.producto_id,
  });

  await setMovimiento({
    cantidad: reclamo.cantidad,
    tipo_movimiento: tipoMovimientoAjuste,
    motivo: operacionCorteAjuste,
    referencia_tipo: tipoReferenciaAjuste,
    referencia_id: reclamo.reclamo_id,
    producto_id: reclamo.producto_destino_id,
  });
};

const compersarPeso = async (reclamo: ReclamoType) => {
  if (!reclamo.diferencia_cantidad) {
    throw new BadRequest("Cantidad reclamada");
  }

  const producto = await getProductoById(reclamo.producto_id);

  if (!producto) {
    throw new NotFound("Producto");
  }

  const tipoMovimientoReclamo = transformToTipoMovimiento("Ajuste");
  const operacionCorteReclamo = transformToOperacion("Devolucion");
  const tipoReferenciaReclamo = transformToTipoReferencia("Reclamo");

  await setMovimiento({
    cantidad: reclamo.diferencia_cantidad,
    tipo_movimiento: tipoMovimientoReclamo,
    motivo: operacionCorteReclamo,
    referencia_tipo: tipoReferenciaReclamo,
    referencia_id: reclamo.reclamo_id,
    producto_id: reclamo.producto_id,
  });
};
