import NotFound from "../error/NotFound";
import { Venta } from "../models/Venta";
import ventaRepository from "../repository/ventaRepository";
import { VentaInput } from "../utils/contracts";

export const createVenta = async () => {
  const venta = Venta.create();

  return await ventaRepository.save({
    fecha_venta: venta.fecha_venta,
    esta_vendida: venta.vendido,
    total: venta.total,
  });
};

export const updateVenta = async (id: number, data: VentaInput) => {
  return await ventaRepository.update(id, data);
};

export const updateVendida = async (id: number) => {
  return await ventaRepository.updateVendida(id);
};

export const deleteVenta = async (id: number) => {
  return await ventaRepository.delete(id);
};

export const getVentaById = async (id: number) => {
  const venta = await ventaRepository.findById(id);

  if (!venta) {
    throw new NotFound("Venta");
  }

  return venta;
};

export const getVentas = async () => {
  const ventas = await ventaRepository.findAll();
  return ventas;
};

export const getDetallesByVenta = async (id: number) => {
  const detalles = await ventaRepository.findDetallesEntrega(id);
  return detalles;
};
