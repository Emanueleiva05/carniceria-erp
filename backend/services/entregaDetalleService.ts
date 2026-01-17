import NotFound from "../error/NotFound";
import { EntregaDetalle } from "../models/EntregaDetalle";
import entregaDetalleRepository from "../repository/entregaDetalleRepository";
import { getEntregaById } from "./entregaService";
import { getProductoById } from "./productoService";
import { EntregaDetalleInput } from "../utils/contracts";
import AppError from "../error/AppError";

export const setEntregaDetalle = async (data: EntregaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getEntregaById(data.entrega_id);

  const existencia = await entregaDetalleRepository.findByEntregaIdProductoId(
    data.entrega_id,
    data.producto_id
  );

  if (existencia) {
    throw new AppError(
      "Ya este creado este detalle para esta entrega y producto",
      409,
      "DuplicateResource"
    );
  }

  const entregaDetalle = EntregaDetalle.create(
    data.cantidad,
    data.precio_compra,
    data.producto_id,
    data.entrega_id
  );

  return await entregaDetalleRepository.save({
    cantidad: entregaDetalle.cantidad,
    precio_compra: entregaDetalle.precio_compra,
    producto_id: entregaDetalle.producto_id,
    entrega_id: entregaDetalle.entrega_id,
  });
};

export const updateEntregaDetalle = async (
  id: number,
  data: EntregaDetalleInput
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
