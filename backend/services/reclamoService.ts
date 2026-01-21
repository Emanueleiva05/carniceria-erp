import NotFound from "../error/NotFound";
import Reclamo from "../models/Reclamo";
import reclamoRepository from "../repository/reclamoRepository";
import { ReclamoInput } from "../utils/contracts";
import { getProductoById } from "./productoService";
import { getProveedoresById } from "./proveedorService";

export const setReclamo = async (data: ReclamoInput) => {
  await getProveedoresById(data.proveedor_id);
  await getProductoById(data.producto_id);

  const reclamo = Reclamo.create(
    data.motivo,
    data.estado,
    data.cantidad,
    data.genera_perdida,
    data.genera_compensacion,
    data.producto_id,
    data.proveedor_id,
  );

  return await reclamoRepository.save({
    fecha_reclamo: reclamo.fecha_reclamo,
    motivo: reclamo.motivo,
    estado: reclamo.estado,
    cantidad: reclamo.cantidad,
    genera_compensacion: reclamo.genera_compensacion,
    genera_perdida: reclamo.genera_perdida,
    descripcion: reclamo.descripcion,
    evidencia: reclamo.evidencia,
    producto_id: reclamo.producto_id,
    proveedor_id: reclamo.proveedor_id,
  });
};

export const updateReclamo = async (id: number, data: ReclamoInput) => {
  await getProveedoresById(data.proveedor_id);
  await getProductoById(data.producto_id);
  return await reclamoRepository.update(id, data);
};

export const deleteReclamo = async (id: number) => {
  return await reclamoRepository.delete(id);
};

export const getReclamoById = async (id: number) => {
  const reclamo = await reclamoRepository.findById(id);

  if (!reclamo) {
    throw new NotFound("Reclamo");
  }

  return reclamo;
};

export const getReclamos = async () => {
  const reclamos = await reclamoRepository.findAll();
  return reclamos;
};
