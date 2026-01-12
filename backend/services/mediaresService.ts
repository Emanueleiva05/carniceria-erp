import NotFound from "../error/NotFound";
import Mediares from "../models/Mediares";
import mediaresRepository from "../repository/mediaresRepository";
import { Tamanio } from "../utils/tipos";

interface MediaresInput {
  mediares_id: number;
  peso_carton: number;
  peso_real: number;
  tamano: Tamanio;
  precio_compra: number;
  tipo_vaca: string;
  entrega_id: number;
}

export const setMediares = async (data: MediaresInput) => {
  return await mediaresRepository.save(data);
};

export const updateMediares = async (id: number, data: MediaresInput) => {
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

const buildMediares = (data: MediaresInput) => {
  return new Mediares(
    data.mediares_id,
    data.peso_carton,
    data.tamano,
    data.precio_compra,
    data.entrega_id
  );
};
