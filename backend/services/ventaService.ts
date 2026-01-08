import ventaRepository from "../repository/ventaRepository";

interface Venta {
  venta_id: number;
  fecha_venta: Date;
  esta_vendida: boolean;
}

export const setVenta = async (data: Venta) => {
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
    throw new Error("No se encontro la venta");
  }

  return venta;
};

export const getVentas = async () => {
  const ventas = await ventaRepository.findAll();

  if (ventas.length === 0) {
    throw new Error("No hay ventas cargadas en el sistema");
  }

  return ventas;
};
