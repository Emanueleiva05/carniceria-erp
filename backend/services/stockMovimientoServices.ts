import NotFound from "../error/NotFound";
import stockMovimientoRepository from "../repository/stockMovimientoRepository";
import { getProductoById } from "./productoService";

interface StockMovimiento {
  movimiento_id: number;
  cantidad: number;
  tipo_movimiento: string;
  motivo: string;
  referencia_id: number;
  referencia_tipo: string;
  producto_id: number;
}

export const setMovimiento = async (data: StockMovimiento) => {
  await getProductoById(data.producto_id);
  return await stockMovimientoRepository.save(data);
};

export const updateMovimiento = async (id: number, data: StockMovimiento) => {
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
