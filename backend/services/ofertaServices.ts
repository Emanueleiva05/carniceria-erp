import ofertaRepository from "../repository/ofertaRepository";

interface Oferta {
  oferta_id: number;
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
}

export const setOferta = async (data: Oferta) => {
  return await ofertaRepository.save(data);
};

export const updateOferta = async (id: number, data: Oferta) => {
  return await ofertaRepository.update(id, data);
};

export const deleteOferta = async (id: number) => {
  return await ofertaRepository.delete(id);
};

export const getOfertaById = async (id: number) => {
  const oferta = await ofertaRepository.findById(id);

  if (!oferta) {
    throw new Error("No se encontro la oferta");
  }

  return oferta;
};

export const getOfertas = async () => {
  const ofertas = await ofertaRepository.findAll();

  if (ofertas.length === 0) {
    throw new Error("No hay ofertas cargadas en el sistema");
  }

  return ofertas;
};
