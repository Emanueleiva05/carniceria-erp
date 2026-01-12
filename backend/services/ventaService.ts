import NotFound from "../error/NotFound";
import ventaRepository from "../repository/ventaRepository";

interface Venta {
  venta_id: number;
  fecha_venta: Date;
  esta_vendida: boolean;
}

export const setVenta = async (data: Venta) => {
  data.fecha_venta = new Date();
  data.esta_vendida = false;

  return await ventaRepository.save(data);
};

export const updateVenta = async (id: number, data: Venta) => {
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
