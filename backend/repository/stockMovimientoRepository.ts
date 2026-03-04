import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { StockMovimiento, StockMovimientoInput } from "../utils/contracts";

class StockMovimientoRepository implements Repository<StockMovimiento, number> {
  async findById(id: number): Promise<StockMovimiento | null> {
    return await prisma.stockMovimiento.findUnique({
      where: {
        movimiento_id: id,
      },
    });
  }

  async findAll(): Promise<StockMovimiento[]> {
    return await prisma.stockMovimiento.findMany();
  }

  async save(data: StockMovimientoInput): Promise<StockMovimiento> {
    const movimiento = await prisma.stockMovimiento.create({
      data: {
        cantidad: data.cantidad,
        tipo_movimiento: data.tipo_movimiento,
        motivo: data.motivo,
        referencia_id: data.referencia_id,
        referencia_tipo: data.referencia_tipo,
        producto_id: data.producto_id,
      },
    });
    return movimiento;
  }

  async update(
    id: number,
    data: StockMovimientoInput,
  ): Promise<StockMovimiento> {
    const movimiento = await prisma.stockMovimiento.update({
      where: { movimiento_id: id },
      data: {
        cantidad: data.cantidad,
        tipo_movimiento: data.tipo_movimiento,
        motivo: data.motivo,
        referencia_id: data.referencia_id,
        referencia_tipo: data.referencia_tipo,
        producto_id: data.producto_id,
      },
    });
    return movimiento;
  }

  async delete(id: number): Promise<void> {
    await prisma.stockMovimiento.delete({
      where: {
        movimiento_id: id,
      },
    });
  }
}

const stockMovimientoRepository = new StockMovimientoRepository();

export default stockMovimientoRepository;
