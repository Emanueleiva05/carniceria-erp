import NotFound from "../error/NotFound";
import { StockMovimiento } from "../models/StockMovimiento";
import stockMovimientoRepository from "../repository/stockMovimientoRepository";
import { Operacion, TipoMovimiento, TipoReferencia } from "../utils/tipos";

interface StockMovimientoInput {
  movimiento_id: number;
  cantidad: number;
  tipo_movimiento: TipoMovimiento;
  motivo: Operacion;
  referencia_id: number;
  referencia_tipo: TipoReferencia;
  producto_id: number;
}

export const setMovimiento = async (data: StockMovimientoInput) => {
  return await stockMovimientoRepository.save(data);
};

export const updateMovimiento = async (
  id: number,
  data: StockMovimientoInput
) => {
  return await stockMovimientoRepository.update(id, data);
};

export const deleteMovimiento = async (id: number) => {
  return await stockMovimientoRepository.delete(id);
};

export const getMovimientoById = async (id: number) => {
  const movimiento = await stockMovimientoRepository.findById(id);

  if (!movimiento) {
    throw new NotFound("Movimiento");
  }

  return movimiento;
};

export const getMovimiento = async () => {
  const movimientos = await stockMovimientoRepository.findAll();
  return movimientos;
};

const buildMovimiento = (data: StockMovimientoInput) => {
  return new StockMovimiento(
    data.movimiento_id,
    data.cantidad,
    data.tipo_movimiento,
    data.motivo,
    data.referencia_id,
    data.referencia_tipo,
    data.producto_id
  );
};
