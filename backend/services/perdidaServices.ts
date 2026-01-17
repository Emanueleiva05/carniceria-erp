import NotFound from "../error/NotFound";
import { Perdida } from "../models/Perdida";
import perdidaRepository from "../repository/perdidaRepository";
import { getProductoById } from "./productoService";
import { PerdidaInput } from "../utils/contracts";
import { transformToUnidadMedida } from "../utils/tipos";
import BadRequest from "../error/BadRequest";

export const setPerdida = async (data: PerdidaInput) => {
  const producto = await getProductoById(data.producto_id);

  const perdida = Perdida.create(
    data.tirado,
    data.unidad_medida,
    data.producto_id
  );

  perdida.calcularTotal(producto.precio_venta);

  return await perdidaRepository.save({
    unidad_medida: perdida.unidad,
    tirado: perdida.tirado,
    fecha_perdida: perdida.fechaPerdida,
    motivo: perdida.motivo,
    total: perdida.total,
    producto_id: perdida.producto_id,
  });
};

export const addMotivo = async (id: number, motivo: string) => {
  const raw = await getPerdidaById(id);

  const unidad = transformToUnidadMedida(raw.unidad_medida);

  if (!unidad) {
    throw new BadRequest("Unidad de medida");
  }

  const perdida = Perdida.create(raw.tirado, unidad, raw.producto_id);

  perdida.agregarMotivo(motivo);

  return await perdidaRepository.update(id, {
    unidad_medida: raw.unidad_medida,
    tirado: raw.tirado,
    fecha_perdida: raw.fecha_perdida,
    motivo: perdida.motivo,
    total: raw.total,
    producto_id: raw.producto_id,
  });
};

export const updatePerdida = async (id: number, data: PerdidaInput) => {
  await getProductoById(data.producto_id);

  return await perdidaRepository.update(id, data);
};

export const deletePerdida = async (id: number) => {
  return await perdidaRepository.delete(id);
};

export const getPerdidaById = async (id: number) => {
  const perdida = await perdidaRepository.findById(id);

  if (!perdida) {
    throw new NotFound("Perdida");
  }

  return perdida;
};

export const getPerdidas = async () => {
  const perdidas = await perdidaRepository.findAll();
  return perdidas;
};

export const getProductosPerdidos = async (id: number) => {
  const productos = await perdidaRepository.findByProductoId(id);
  return productos;
};
