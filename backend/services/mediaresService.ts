import NotFound from "../error/NotFound";
import mediaresRepository from "../repository/mediaresRepository";
import { getEntregaById } from "./entregaService";
import {
  MediaresInput,
  transformToNumber,
  transformToString,
} from "../utils/contracts";
import Mediares from "../models/Mediares";

export const setMediares = async (data: MediaresInput) => {
  await getEntregaById(data.entrega_id);

  const mediares = Mediares.create(
    data.peso_carton,
    data.tamano,
    data.precio_compra,
    data.peso_real,
    data.tipo_vaca,
    data.entrega_id
  );

  const tipoVaca = transformToString(mediares.tipo_vaca);
  const tamanio = transformToNumber(mediares.tamanio);

  const save = await mediaresRepository.save({
    peso_carton: mediares.peso_carton,
    precio_compra: mediares.precio_compra,
    tamano: tamanio,
    peso_real: mediares.peso_real,
    tipo_vaca: tipoVaca,
    entrega_id: mediares.entrega_id,
  });

  return save;
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

export const getCarnesMediares = async (id: number) => {
  const carnes = await mediaresRepository.findCarneByMediares(id);
  return carnes;
};
