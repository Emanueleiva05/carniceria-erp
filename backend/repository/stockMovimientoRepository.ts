import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type StockMovimientoPrisma = {
  cantidad: number;
  tipo_movimiento: string;
  motivo: string;
  referencia_id: number;
  referencia_tipo: string;
  producto_id: number;
};

class StockMovimientoRepository
  implements Repository<StockMovimientoPrisma, number>
{
  async findById(id: number): Promise<StockMovimientoPrisma | null> {
    return await prisma.stockMovimiento.findUnique({
      where: {
        movimiento_id: id,
      },
    });
  }

  async findAll(): Promise<StockMovimientoPrisma[]> {
    return await prisma.stockMovimiento.findMany();
  }

  async save(data: StockMovimientoPrisma) {
    await prisma.stockMovimiento.create({
      data: {
        cantidad: data.cantidad,
        tipo_movimiento: data.tipo_movimiento,
        motivo: data.motivo,
        referencia_id: data.referencia_id,
        referencia_tipo: data.referencia_tipo,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: StockMovimientoPrisma): Promise<void> {
    await prisma.stockMovimiento.update({
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
