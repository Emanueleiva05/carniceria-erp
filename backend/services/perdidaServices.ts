import NotFound from "../error/NotFound";
import BadRequest from "../error/BadRequest";
import { Perdida } from "../models/Perdida";
import perdidaRepository from "../repository/perdidaRepository";
import { getProductoById } from "./productoService";
import { createMovimiento, updateMovimiento } from "./stockMovimientoServices";
import {
  transformToOperacion,
  transformToTipoMovimiento,
  transformToTipoReferencia,
  transformToUnidadMedida,
} from "../utils/tipos";
import { PerdidaInput } from "../utils/contracts";

export const createPerdida = async (data: PerdidaInput) => {
  const producto = await getProductoById(data.producto_id);

  const perdida = Perdida.create(
    data.tirado,
    data.unidad_medida,
    data.producto_id,
  );

  perdida.calculateTotal(producto.precio_venta);

  const tipoMovimiento = transformToTipoMovimiento("Salida");
  const operacion = transformToOperacion("Perdida");
  const tipoReferencia = transformToTipoReferencia("Perdida");

  const movimiento = await createMovimiento({
    cantidad: perdida.tirado,
    tipo_movimiento: tipoMovimiento,
    motivo: operacion,
    referencia_id: 1,
    referencia_tipo: tipoReferencia,
    producto_id: perdida.producto_id,
  });

  const saved = await perdidaRepository.save({
    unidad_medida: perdida.unidad,
    tirado: perdida.tirado,
    fecha_perdida: perdida.fechaPerdida,
    motivo: perdida.motivo,
    total: perdida.total,
    producto_id: perdida.producto_id,
  });

  await updateMovimiento(movimiento.movimiento_id, {
    cantidad: perdida.tirado,
    tipo_movimiento: tipoMovimiento,
    motivo: operacion,
    referencia_id: saved.perdida_id,
    referencia_tipo: tipoReferencia,
    producto_id: perdida.producto_id,
  });

  return saved;
};

export const addMotivo = async (id: number, motivo: string) => {
  const raw = await getPerdidaById(id);

  const unidad = transformToUnidadMedida(raw.unidad_medida);

  if (!unidad) {
    throw new BadRequest("Unidad de medida");
  }

  const perdida = Perdida.fromPersistence(raw);

  perdida.addMotive(motivo);

  return await perdidaRepository.update(id, {
    unidad_medida: raw.unidad_medida,
    tirado: raw.tirado,
    fecha_perdida: raw.fecha_perdida,
    motivo: perdida.motivo,
    total: raw.total,
    producto_id: raw.producto_id,
  });
};

export const updatePerdida = async (id: number, data: PerdidaInput) => {
  await getProductoById(data.producto_id);

  return await perdidaRepository.update(id, data);
};

export const updateTirado = async (id: number, data: number) => {
  return await perdidaRepository.updateTirado(id, data);
};

export const deletePerdida = async (id: number) => {
  return await perdidaRepository.delete(id);
};

export const getPerdidaById = async (id: number) => {
  const perdida = await perdidaRepository.findById(id);

  if (!perdida) {
    throw new NotFound("Perdida");
  }

  return perdida;
};

export const getPerdidas = async () => {
  const perdidas = await perdidaRepository.findAll();
  return perdidas;
};

export const getProductosPerdidos = async (id: number) => {
  const productos = await perdidaRepository.findByProductoId(id);
  return productos;
};

export const getPerdidasLastWeek = async () => {
  const perdidas = await perdidaRepository.findByLastWeek();

  if (perdidas.length === 0) {
    throw new NotFound("Perdidas en la ultima semana");
  }

  return perdidas;
};

export const getPerdidasByMounth = async (mes: number, anio: number) => {
  const perdidas = await perdidaRepository.findByMonth(mes, anio);

  if (perdidas.length === 0) {
    throw new NotFound("Perdidas en el mes");
  }

  return perdidas;
};
