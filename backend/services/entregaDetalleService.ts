import NotFound from "../error/NotFound";
import { EntregaDetalle } from "../models/EntregaDetalle";
import entregaDetalleRepository from "../repository/entregaDetalleRepository";
import { getEntregaById } from "./entregaService";
import { getProductoById } from "./productoService";

export interface EntregaDetalleInput {
  entregaDetalle_id: number;
  cantidad: number;
  precio_compra: number;
  producto_id: number;
  entrega_id: number;
}

export const setEntregaDetalle = async (data: EntregaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getEntregaById(data.entrega_id);

  return await entregaDetalleRepository.save(data);
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

const buildEntregaDetalle = (data: EntregaDetalleInput) => {
  return new EntregaDetalle(
    data.entregaDetalle_id,
    data.cantidad,
    data.precio_compra,
    data.producto_id,
    data.entrega_id
  );
};
