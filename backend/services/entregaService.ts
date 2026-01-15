import NotFound from "../error/NotFound";
import Entrega from "../models/Entrega";
import entregaRepository from "../repository/entregaRepository";
import { EntregaInput } from "../utils/contracts";
import { getProveedoresById } from "./proveedorService";

export const setEntrega = async (data: EntregaInput) => {
  await getProveedoresById(data.proveedor_id);
  const entrega = Entrega.create(data.proveedor_id);

  return await entregaRepository.save({
    fecha_entrega: entrega.fechaEntrega,
    total: entrega.total,
    pago: entrega.pago,
    factura: entrega.factura,
    proveedor_id: entrega.proveedor_id,
  });
};

export const updateEntrega = async (id: number, data: EntregaInput) => {
  await getProveedoresById(data.proveedor_id);

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
