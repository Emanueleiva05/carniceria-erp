import NotFound from "../error/NotFound";
import DuplicateResource from "../error/DuplicateResource";
import { EntregaDetalle } from "../models/EntregaDetalle";
import Entrega from "../models/Entrega";
import entregaRepository from "../repository/entregaRepository";
import entregaDetalleRepository from "../repository/entregaDetalleRepository";
import { createMovimiento } from "./stockMovimientoServices";
import { getEntregaById } from "./entregaService";
import { getProductoById } from "./productoService";
import {
  transformToOperacion,
  transformToTipoMovimiento,
  transformToTipoReferencia,
} from "../utils/tipos";
import { EntregaDetalleInput } from "../utils/contracts";

export const createEntregaDetalle = async (data: EntregaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getEntregaById(data.entrega_id);

  const existencia = await entregaDetalleRepository.findByEntregaIdProductoId(
    data.entrega_id,
    data.producto_id,
  );

  if (existencia) {
    throw new DuplicateResource("Detalle entrega");
  }

  const entregaDetalle = EntregaDetalle.create(
    data.cantidad,
    data.precio_compra,
    data.producto_id,
    data.entrega_id,
  );

  const saved = await entregaDetalleRepository.save({
    cantidad: entregaDetalle.cantidad,
    precio_compra: entregaDetalle.precio_compra,
    producto_id: entregaDetalle.producto_id,
    entrega_id: entregaDetalle.entrega_id,
  });

  await calculateTotal(data.entrega_id);

  const tipoMovimiento = transformToTipoMovimiento("Entrada");
  const operacion = transformToOperacion("Compra");
  const tipoReferencia = transformToTipoReferencia("Entrega");

  await createMovimiento({
    cantidad: saved.cantidad,
    tipo_movimiento: tipoMovimiento,
    motivo: operacion,
    referencia_id: saved.entregaDetalle_id,
    referencia_tipo: tipoReferencia,
    producto_id: saved.producto_id,
  });

  return saved;
};

const calculateTotal = async (entregaId: number) => {
  const rawEntrega = await getEntregaById(entregaId);
  const rawDetalles = await entregaDetalleRepository.findByEntregaId(entregaId);

  const entrega = Entrega.fromPersistence(rawEntrega);
  const detalles: EntregaDetalle[] = rawDetalles.map((detalle) =>
    EntregaDetalle.fromPersistence(detalle),
  );

  entrega.calculateTotal(detalles);

  return entregaRepository.update(entregaId, {
    fecha_entrega: rawEntrega.fecha_entrega,
    total: entrega.total,
    pago: rawEntrega.pago,
    factura: rawEntrega.factura,
    proveedor_id: rawEntrega.proveedor_id,
  });
};

export const updateEntregaDetalle = async (
  id: number,
  data: EntregaDetalleInput,
) => {
  await getProductoById(data.producto_id);
  await getEntregaById(data.entrega_id);

  return await entregaDetalleRepository.update(id, data);
};

export const updateCantidad = async (id: number, data: number) => {
  return await entregaDetalleRepository.updateCantidad(id, data);
};

export const updatePrecio = async (id: number, data: number) => {
  return await entregaDetalleRepository.updatePrecio(id, data);
};

export const deleteEntregaDetalle = async (id: number) => {
  return await entregaDetalleRepository.delete(id);
};

export const getEntregaDetalleById = async (id: number) => {
  const entregaDetalle = await entregaDetalleRepository.findById(id);

  if (!entregaDetalle) {
    throw new NotFound("Entrega detalle");
  }

  return entregaDetalle;
};

export const getEntregaDetalles = async () => {
  const entregaDetalles = await entregaDetalleRepository.findAll();
  return entregaDetalles;
};
