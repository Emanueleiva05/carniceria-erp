import carneDepostadaRepository from "../repository/carneDepostadoRepository";
import NotFound from "../error/NotFound";
import { getMediaresById } from "./mediaresService";
import { getProductoById } from "./productoService";
import { CarneDepostada } from "../models/CarneDepostada";
import { CarneInput } from "../utils/contracts";
import DuplicateResource from "../error/DuplicateResource";
import { createMovimiento } from "./stockMovimientoServices";
import {
  transformToOperacion,
  transformToTipoMovimiento,
  transformToTipoReferencia,
} from "../utils/tipos";

export const createCarne = async (data: CarneInput) => {
  await getMediaresById(data.mediares_id);
  await getProductoById(data.producto_id);

  const existencia = await carneDepostadaRepository.findByProductoIdMediaresId(
    data.mediares_id,
    data.producto_id,
  );

  if (existencia) {
    throw new DuplicateResource("Carne depostada");
  }
  const carne = CarneDepostada.create(
    data.peso_real,
    data.mediares_id,
    data.producto_id,
  );
  const saved = await carneDepostadaRepository.save({
    peso_real: carne.peso_real,
    mediares_id: carne.mediares_id,
    producto_id: carne.producto_id,
  });
  const tipoMovimiento = transformToTipoMovimiento("Entrada");
  const operacion = transformToOperacion("Compra");
  const tipoReferencia = transformToTipoReferencia("Mediares");

  await createMovimiento({
    cantidad: saved.peso_real,
    tipo_movimiento: tipoMovimiento,
    motivo: operacion,
    referencia_id: saved.mediares_id,
    referencia_tipo: tipoReferencia,
    producto_id: saved.producto_id,
  });
  return saved;
};

export const updateCarne = async (id: number, data: CarneInput) => {
  return await carneDepostadaRepository.update(id, data);
};

export const updatePeso = async (id: number, peso: number) => {
  return await carneDepostadaRepository.updatePeso(id, peso);
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
