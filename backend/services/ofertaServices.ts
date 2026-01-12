import NotFound from "../error/NotFound";
import { Oferta } from "../models/Oferta";
import ofertaRepository from "../repository/ofertaRepository";
import { getProductoById } from "./productoService";

interface OfertaInput {
  oferta_id: number;
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
}

export const setOferta = async (data: OfertaInput) => {
  await getProductoById(data.producto_id);
  data.esta_activo = true;

  return await ofertaRepository.save(data);
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

const buildOferta = (data: OfertaInput) => {
  return new Oferta(
    data.oferta_id,
    data.minKg,
    data.precio_oferta,
    data.esta_activo,
    data.producto_id
  );
};
