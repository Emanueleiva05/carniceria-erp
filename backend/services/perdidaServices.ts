import NotFound from "../error/NotFound";
import { Perdida } from "../models/Perdida";
import perdidaRepository from "../repository/perdidaRepository";
import { UnidadMedida } from "../utils/tipos";

interface PerdidaInput {
  perdida_id: number;
  tirado: number;
  unidad_medida: UnidadMedida;
  fecha_perdida: Date;
  motivo: string;
  total: number;
  producto_id: number;
}

export const setPerdida = async (data: PerdidaInput) => {
  return await perdidaRepository.save(data);
};

export const updatePerdida = async (id: number, data: PerdidaInput) => {
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

const buildPerdida = (data: PerdidaInput) => {
  return new Perdida(
    data.perdida_id,
    data.tirado,
    data.unidad_medida,
    data.fecha_perdida,
    data.motivo,
    data.total,
    data.producto_id
  );
};
