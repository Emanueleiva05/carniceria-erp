import NotFound from "../error/NotFound";
import mediaresRepository from "../repository/mediaresRepository";
import { getEntregaById } from "./entregaService";
import {
  MediaresInput,
  transformToNumber,
  transformToString,
} from "../utils/contracts";
import Mediares from "../models/Mediares";
import { transformToTamanio, transformToTipoVaca } from "../utils/tipos";

export const createMediares = async (data: MediaresInput) => {
  await getEntregaById(data.entrega_id);

  const mediares = Mediares.create(
    data.peso_carton,
    data.tamano,
    data.precio_compra,
    data.peso_real,
    data.entrega_id,
  );

  const rawTipoVaca = transformToTipoVaca(mediares.peso_real);
  const rawTamanio = transformToTamanio(mediares.peso_real);
  const tipoVaca = transformToString(rawTipoVaca);
  const tamanio = transformToNumber(rawTamanio);

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

export const updatePesoCarton = async (id: number, data: number) => {
  return await mediaresRepository.updatePesoCarton(id, data);
};

export const updatePesoReal = async (id: number, data: number) => {
  return await mediaresRepository.updatePesoReal(id, data);
};

export const updatePrecioCompra = async (id: number, data: number) => {
  return await mediaresRepository.updatePrecioCompra(id, data);
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

export const getCarneByMediares = async (id: number) => {
  const carnes = await mediaresRepository.findCarneByMediares(id);
  return carnes;
};
