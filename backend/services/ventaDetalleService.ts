import NotFound from "../error/NotFound";
import ventaDetalleRepository from "../repository/ventaDetalleRepository";
import { getOfertaById } from "./ofertaServices";
import { getProductoById } from "./productoService";
import { getVentaById } from "./ventaService";

interface VentaDetalle {
  ventaDetalle_id: number;
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number;
}

export const setVentaDetalle = async (data: VentaDetalle) => {
  await getProductoById(data.producto_id);
  await getVentaById(data.venta_id);

  if (data.oferta_id) {
    await getOfertaById(data.oferta_id);
  }

  return await ventaDetalleRepository.save(data);
};

export const updateVentaDetalle = async (id: number, data: VentaDetalle) => {
  await getProductoById(data.producto_id);
  await getVentaById(data.venta_id);

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
