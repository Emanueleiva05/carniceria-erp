import NotFound from "../error/NotFound";
import { VentaDetalla } from "../models/VentaDetalle";
import ventaDetalleRepository from "../repository/ventaDetalleRepository";

interface VentaDetalleInput {
  ventaDetalle_id: number;
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number;
}

export const setVentaDetalle = async (data: VentaDetalleInput) => {
  return await ventaDetalleRepository.save(data);
};

export const updateVentaDetalle = async (
  id: number,
  data: VentaDetalleInput
) => {
  return await ventaDetalleRepository.update(id, data);
};

export const deleteVentaDetalle = async (id: number) => {
  return await ventaDetalleRepository.delete(id);
};

export const getVentaDetalleById = async (id: number) => {
  const ventaDetalle = await ventaDetalleRepository.findById(id);

  if (!ventaDetalle) {
    throw new NotFound("Venta detalle");
  }

  return ventaDetalle;
};

export const getVentaDetalles = async () => {
  const ventaDetalles = await ventaDetalleRepository.findAll();
  return ventaDetalles;
};

const buildVentaDetalle = (data: VentaDetalleInput) => {
  return new VentaDetalla(
    data.ventaDetalle_id,
    data.precio_unitario,
    data.cantidad,
    data.subtotal,
    data.producto_id,
    data.venta_id,
    data.oferta_id
  );
};
