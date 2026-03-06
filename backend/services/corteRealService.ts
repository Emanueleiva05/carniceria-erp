import NotFound from "../error/NotFound";
import CorteReal from "../models/CorteReal";
import carneRealRepository from "../repository/carneRealRepository";
import { CorteRealInput } from "../utils/contracts";

export const createCorteReal = async (data: CorteRealInput) => {
  const corte = CorteReal.create(data.nombre, data.peso_real, data.mediares_id);

  return await carneRealRepository.save({
    nombre: corte.nombre,
    peso_real: corte.peso_real,
    create_at: corte.create_at,
    mediares_id: corte.mediares_id,
  });
};

export const updateCorteReal = async (id: number, data: CorteRealInput) => {
  return await carneRealRepository.update(id, data);
};

export const updatePeso = async (id: number, peso: number) => {
  return await carneRealRepository.updatePeso(id, peso);
};

export const deleteCorteReal = async (id: number) => {
  return await carneRealRepository.delete(id);
};

export const getCorteRealById = async (id: number) => {
  const carne = await carneRealRepository.findById(id);

  if (!carne) {
    throw new NotFound("Corte real");
  }

  return carne;
};

export const getCorteReales = async () => {
  const carne = await carneRealRepository.findAll();
  return carne;
};
