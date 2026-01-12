import NotFound from "../error/NotFound";
import { Venta } from "../models/Venta";
import ventaRepository from "../repository/ventaRepository";

interface VentaInput {
  venta_id: number;
  fecha_venta: Date;
  esta_vendida: boolean;
  total: number;
}

export const setVenta = async (data: VentaInput) => {
  data.fecha_venta = new Date();
  data.esta_vendida = false;

  return await ventaRepository.save(data);
};

export const updateVenta = async (id: number, data: VentaInput) => {
  return await ventaRepository.update(id, data);
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

const buildVenta = (data: VentaInput) => {
  return new Venta(
    data.venta_id,
    data.fecha_venta,
    data.esta_vendida,
    data.total
  );
};
