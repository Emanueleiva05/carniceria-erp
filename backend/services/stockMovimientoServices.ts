import stockMovimientoRepository from "../repository/stockMovimientoRepository";

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
    throw new Error("No se encontro el movimiento");
  }

  return movimiento;
};

export const getMovimiento = async () => {
  const movimientos = await stockMovimientoRepository.findAll();

  if (movimientos.length === 0) {
    throw new Error("No hay movimientos cargados en el sistema");
  }

  return movimientos;
};
