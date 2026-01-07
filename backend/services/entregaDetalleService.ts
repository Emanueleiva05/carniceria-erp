import entregaDetalleRepository from "../repository/entregaDetalleRepository";

interface EntregaDetalle {
  entregaDetalle_id: number;
  cantidad: number;
  precio_compra: number;
  producto_id: number;
  entrega_id: number;
}

export const setEntregaDetalle = async (data: EntregaDetalle) => {
  return await entregaDetalleRepository.save(data);
};

export const updateEntregaDetalle = async (
  id: number,
  data: EntregaDetalle
) => {
  return await entregaDetalleRepository.update(id, data);
};

export const deleteEntregaDetalle = async (id: number) => {
  return await entregaDetalleRepository.delete(id);
};

export const getEntregaDetalleById = async (id: number) => {
  const entregaDetalle = await entregaDetalleRepository.findById(id);

  if (!entregaDetalle) {
    throw new Error("No se encontro la entrega detalle");
  }

  return entregaDetalle;
};

export const getEntregaDetalles = async () => {
  const entregaDetalles = await entregaDetalleRepository.findAll();

  if (entregaDetalles.length === 0) {
    throw new Error("No hay entrega detalles cargada en el sistema");
  }

  return entregaDetalles;
};
