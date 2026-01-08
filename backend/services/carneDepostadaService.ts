import carneDepostadaRepository from "../repository/carneDepostadoRepository";

interface CarneDepostada {
  carne_id: number;
  peso_real: number;
  producto_id: number;
  mediares_id: number;
}

export const setCarne = async (data: CarneDepostada) => {
  return await carneDepostadaRepository.save(data);
};

export const updateCarne = async (id: number, data: CarneDepostada) => {
  return await carneDepostadaRepository.update(id, data);
};

export const deleteCarne = async (id: number) => {
  return await carneDepostadaRepository.delete(id);
};

export const getCarneById = async (id: number) => {
  const carne = await carneDepostadaRepository.findById(id);

  if (!carne) {
    throw new Error("No se encontro la carne");
  }

  return carne;
};

export const getCarnes = async () => {
  const carnes = await carneDepostadaRepository.findAll();

  if (carnes.length === 0) {
    throw new Error("No hay carne cargada en el sistema");
  }

  return carnes;
};
