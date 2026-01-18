import NotFound from "../error/NotFound";
import { EntregaDetalle } from "../models/EntregaDetalle";
import entregaDetalleRepository from "../repository/entregaDetalleRepository";
import { getEntregaById } from "./entregaService";
import { getProductoById } from "./productoService";
import { EntregaDetalleInput } from "../utils/contracts";
import AppError from "../error/AppError";
import Entrega from "../models/Entrega";
import entregaRepository from "../repository/entregaRepository";

export const setEntregaDetalle = async (data: EntregaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getEntregaById(data.entrega_id);

  const existencia = await entregaDetalleRepository.findByEntregaIdProductoId(
    data.entrega_id,
    data.producto_id,
  );

  if (existencia) {
    throw new AppError(
      "Ya este creado este detalle para esta entrega y producto",
      409,
      "DuplicateResource",
    );
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

  await recalcularTotal(data.entrega_id);

  return saved;
};

const recalcularTotal = async (entregaId: number) => {
  const rawEntrega = await getEntregaById(entregaId);
  const rawDetalles = await entregaDetalleRepository.findByEntregaId(entregaId);

  const entrega = Entrega.create(rawEntrega.proveedor_id);
  const detalles: EntregaDetalle[] = rawDetalles.map((detalle) =>
    EntregaDetalle.create(
      detalle.cantidad,
      detalle.precio_compra,
      detalle.producto_id,
      detalle.entrega_id,
    ),
  );

  entrega.calcularTotal(detalles);

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
