import entregaRepository from "../repository/entregaRepository";

interface Entrega {
  entrega_id: number;
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string;
  proveedor_id: number;
}

export const setEntrega = async (data: Entrega) => {
  return await entregaRepository.save(data);
};

export const updateEntrega = async (id: number, data: Entrega) => {
  return await entregaRepository.update(id, data);
};

export const deleteEntrega = async (id: number) => {
  return await entregaRepository.delete(id);
};

export const getEntregaById = async (id: number) => {
  const entrega = await entregaRepository.findById(id);

  if (!entrega) {
    throw new Error("No se encontro la entrega");
  }

  return entrega;
};

export const getEntregas = async () => {
  const entregas = await entregaRepository.findAll();

  if (entregas.length === 0) {
    throw new Error("No hay entregas cargada en el sistema");
  }

  return entregas;
};
