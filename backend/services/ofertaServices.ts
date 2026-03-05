import NotFound from "../error/NotFound";
import DuplicateResource from "../error/DuplicateResource";
import { Oferta } from "../models/Oferta";
import ofertaRepository from "../repository/ofertaRepository";
import { getProductoById } from "./productoService";
import { OfertaInput } from "../utils/contracts";

export const createOferta = async (data: OfertaInput) => {
  await getProductoById(data.producto_id);
  const existencia = await ofertaRepository.findByEstadoActivoProductoId(
    data.producto_id,
  );

  if (existencia) {
    throw new DuplicateResource("Oferta");
  }

  const oferta = Oferta.create(
    data.minKg,
    data.precio_oferta,
    data.producto_id,
  );

  return await ofertaRepository.save({
    minKg: oferta.minKg,
    precio_oferta: oferta.precio_oferta,
    esta_activo: oferta.estaActivo,
    producto_id: oferta.producto_id,
  });
};

export const updateEstado = async (id: number) => {
  const raw = await getOfertaById(id);

  const entrega = Oferta.fromPersistence(raw);

  entrega.inactive();

  return await ofertaRepository.update(id, {
    minKg: raw.minKg,
    esta_activo: entrega.estaActivo,
    precio_oferta: raw.precio_oferta,
    producto_id: raw.producto_id,
  });
};

export const updateOferta = async (id: number, data: OfertaInput) => {
  return await ofertaRepository.update(id, data);
};

export const deleteOferta = async (id: number) => {
  return await ofertaRepository.delete(id);
};

export const getOfertaById = async (id: number) => {
  const oferta = await ofertaRepository.findById(id);

  if (!oferta) {
    throw new NotFound("Oferta");
  }

  return oferta;
};

export const getOfertas = async () => {
  const ofertas = await ofertaRepository.findAll();
  return ofertas;
};

export const getActiveOfertas = async () => {
  const ofertaActivas = await ofertaRepository.findByEstadoActivo();
  return ofertaActivas;
};

export const getProductosEnOferta = async (id: number) => {
  const productos = await ofertaRepository.findByProductoId(id);
  return productos;
};
