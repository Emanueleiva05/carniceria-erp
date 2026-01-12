import carneDepostadaRepository from "../repository/carneDepostadoRepository";
import NotFound from "../error/NotFound";
import { getMediaresById } from "./mediaresService";
import { getProductoById } from "./productoService";
import { CarneDepostada } from "../models/CarneDepostada";

interface CarneInput {
  carne_id: number;
  peso_real: number;
  producto_id: number;
  mediares_id: number;
}

export const setCarne = async (data: CarneInput) => {
  await getMediaresById(data.mediares_id);
  await getProductoById(data.producto_id);

  return await carneDepostadaRepository.save(data);
};

export const updateCarne = async (id: number, data: CarneInput) => {
  return await carneDepostadaRepository.update(id, data);
};

export const deleteCarne = async (id: number) => {
  return await carneDepostadaRepository.delete(id);
};

export const getCarneById = async (id: number) => {
  const carne = await carneDepostadaRepository.findById(id);

  if (!carne) {
    throw new NotFound("Carne");
  }

  return carne;
};

export const getCarnes = async () => {
  const carnes = await carneDepostadaRepository.findAll();
  return carnes;
};

const buildCarne = (data: CarneInput) => {
  return new CarneDepostada(
    data.carne_id,
    data.peso_real,
    data.mediares_id,
    data.producto_id
  );
};
