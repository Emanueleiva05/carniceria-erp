import { prisma } from "../config/db";
import { VentaInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

type VentaPrisma = {
  venta_id: number;
  fecha_venta: Date;
  esta_vendida: boolean;
};

class VentaRepository implements Repository<VentaInput, number> {
  async findById(id: number): Promise<VentaInput | null> {
    return await prisma.venta.findUnique({
      where: {
        venta_id: id,
      },
    });
  }

  async findAll(): Promise<VentaInput[]> {
    return await prisma.venta.findMany();
  }

  async save(data: VentaInput): Promise<VentaPrisma> {
    const venta = await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
      },
    });
    return venta;
  }

  async update(id: number, data: VentaInput): Promise<VentaPrisma> {
    const venta = await prisma.venta.update({
      where: { venta_id: id },
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
      },
    });
    return venta;
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
