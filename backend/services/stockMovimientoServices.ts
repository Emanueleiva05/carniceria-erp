import NotFound from "../error/NotFound";
import { StockMovimiento } from "../models/StockMovimiento";
import stockMovimientoRepository from "../repository/stockMovimientoRepository";
import { StockMovimientoInput } from "../utils/contracts";
import { getProductoById } from "./productoService";

export const setMovimiento = async (data: StockMovimientoInput) => {
  await getProductoById(data.producto_id);

  const movimiento = StockMovimiento.create(
    data.cantidad,
    data.tipo_movimiento,
    data.motivo,
    data.referencia_id,
    data.referencia_tipo,
    data.producto_id
  );
  return await stockMovimientoRepository.save({
    cantidad: movimiento.cantidad,
    tipo_movimiento: movimiento.tipo,
    motivo: movimiento.motivo,
    referencia_id: movimiento.referencia_id,
    referencia_tipo: movimiento.referencia_tipo,
    producto_id: movimiento.producto_id,
  });
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
