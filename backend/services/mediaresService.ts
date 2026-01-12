import NotFound from "../error/NotFound";
import mediaresRepository from "../repository/mediaresRepository";
import { getEntregaById } from "./entregaService";

interface Mediares {
  mediares_id: number;
  peso_carton: number;
  peso_real: number;
  tamano: number;
  precio_compra: number;
  tipo_vaca: string;
  entrega_id: number;
}

export const setMediares = async (data: Mediares) => {
  await getEntregaById(data.entrega_id);

  return await mediaresRepository.save(data);
};

export const updateMediares = async (id: number, data: Mediares) => {
  return await mediaresRepository.update(id, data);
};

export const deleteMediares = async (id: number) => {
  return await mediaresRepository.delete(id);
};

export const getMediaresById = async (id: number) => {
  const mediares = await mediaresRepository.findById(id);

  if (!mediares) {
    throw new NotFound("Mediares");
  }

  return mediares;
};

export const getMediares = async () => {
  const mediareses = await mediaresRepository.findAll();
  return mediareses;
};
