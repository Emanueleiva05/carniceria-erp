import NotFound from "../error/NotFound";
import perdidaRepository from "../repository/perdidaRepository";

interface Perdida {
  perdida_id: number;
  tirado: number;
  unidad_medida: string;
  fecha_perdida: Date;
  motivo: string;
  total: number;
  producto_id: number;
}

export const setPerdida = async (data: Perdida) => {
  return await perdidaRepository.save(data);
};

export const updatePerdida = async (id: number, data: Perdida) => {
  return await perdidaRepository.update(id, data);
};

export const deletePerdida = async (id: number) => {
  return await perdidaRepository.delete(id);
};

export const getPerdidaById = async (id: number) => {
  const perdida = await perdidaRepository.findById(id);

  if (!perdida) {
    throw new NotFound("Perdida");
  }

  return perdida;
};

export const getPerdidas = async () => {
  const perdidas = await perdidaRepository.findAll();
  return perdidas;
};
