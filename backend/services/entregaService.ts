import NotFound from "../error/NotFound";
import Entrega from "../models/Entrega";
import entregaRepository from "../repository/entregaRepository";

interface EntregaInput {
  entrega_id: number;
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string;
  proveedor_id: number;
}

export const setEntrega = async (data: EntregaInput) => {
  return await entregaRepository.save(data);
};

export const updateEntrega = async (id: number, data: EntregaInput) => {
  return await entregaRepository.update(id, data);
};

export const deleteEntrega = async (id: number) => {
  return await entregaRepository.delete(id);
};

export const getEntregaById = async (id: number) => {
  const entrega = await entregaRepository.findById(id);

  if (!entrega) {
    throw new NotFound("Entrega");
  }

  return entrega;
};

export const getEntregas = async () => {
  const entregas = await entregaRepository.findAll();
  return entregas;
};

const buildEntrega = (data: EntregaInput) => {
  return new Entrega(
    data.entrega_id,
    data.fecha_entrega,
    data.total,
    data.pago,
    data.factura,
    data.proveedor_id
  );
};
