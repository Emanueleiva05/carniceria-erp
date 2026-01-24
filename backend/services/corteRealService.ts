import NotFound from "../error/NotFound";
import CorteReal from "../models/CorteReal";
import carneRealRepository from "../repository/carneRealRepository";
import { CorteRealInput } from "../utils/contracts";

export const setCarneReal = async (data: CorteRealInput) => {
  const corte = CorteReal.create(data.nombre, data.peso_real, data.mediares_id);

  return await carneRealRepository.save({
    nombre: corte.nombre,
    peso_real: corte.peso_real,
    create_at: corte.create_at,
    mediares_id: corte.mediares_id,
  });
};

export const updateCarneReal = async (id: number, data: CorteRealInput) => {
  return await carneRealRepository.update(id, data);
};

export const deleteCarneReal = async (id: number) => {
  return await carneRealRepository.delete(id);
};

export const getCarneRealById = async (id: number) => {
  const carne = await carneRealRepository.findById(id);

  if (!carne) {
    throw new NotFound("Carne");
  }

  return carne;
};

export const getCarneReales = async () => {
  const carne = await carneRealRepository.findAll();
  return carne;
};
