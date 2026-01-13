import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type VentaPrisma = {
  fecha_venta: Date;
  esta_vendida: boolean;
};

class VentaRepository implements Repository<VentaPrisma, number> {
  async findById(id: number): Promise<VentaPrisma | null> {
    return await prisma.venta.findUnique({
      where: {
        venta_id: id,
      },
    });
  }

  async findAll(): Promise<VentaPrisma[]> {
    return await prisma.venta.findMany();
  }

  async save(data: VentaPrisma) {
    await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
      },
    });
  }

  async update(id: number, data: VentaPrisma): Promise<void> {
    await prisma.venta.update({
      where: { venta_id: id },
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.venta.delete({
      where: {
        venta_id: id,
      },
    });
  }
}

const ventaRepository = new VentaRepository();

export default ventaRepository;
