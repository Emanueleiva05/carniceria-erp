import { prisma } from "../config/db";
import { StockMovimiento } from "@prisma/client";
import { Repository } from "./genericRepository";

export class ProveedorRepository
  implements Repository<StockMovimiento, number>
{
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

  async save(data: StockMovimiento) {
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

  async update(id: number, data: StockMovimiento): Promise<void> {
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
