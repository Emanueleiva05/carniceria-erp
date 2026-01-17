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

export const updatePago = async (id: number) => {
  const raw = await getEntregaById(id);

  const entrega = Entrega.create(raw.proveedor_id);

  entrega.pagado();

  return await entregaRepository.update(id, {
    fecha_entrega: raw.fecha_entrega,
    total: raw.total,
    pago: entrega.pago,
    factura: raw.factura,
    proveedor_id: raw.proveedor_id,
  });
};

export const addFactura = async (id: number, archivo: string) => {
  const raw = await getEntregaById(id);

  const entrega = Entrega.create(raw.proveedor_id);

  entrega.agregarFactura(archivo);

  return await entregaRepository.update(id, {
    fecha_entrega: raw.fecha_entrega,
    total: raw.total,
    pago: raw.pago,
    factura: entrega.factura,
    proveedor_id: raw.proveedor_id,
  });
};

export const changeProveedor = async (id: number, proveedorId: number) => {
  const raw = await getEntregaById(id);

  const entrega = Entrega.create(raw.proveedor_id);

  entrega.cambiarProveedor(proveedorId);

  return await entregaRepository.update(id, {
    fecha_entrega: raw.fecha_entrega,
    total: raw.total,
    pago: raw.pago,
    factura: raw.factura,
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

export const getDetallesByEntrega = async (id: number) => {
  const detalles = await entregaRepository.findDetallesVenta(id);
  return detalles;
};
