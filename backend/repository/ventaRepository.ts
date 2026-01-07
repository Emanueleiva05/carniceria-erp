import { prisma } from "../config/db";
import { Venta } from "@prisma/client";
import { Repository } from "./genericRepository";

class VentaRepository implements Repository<Venta, number> {
  async findById(id: number): Promise<Venta | null> {
    return await prisma.venta.findUnique({
      where: {
        venta_id: id,
      },
    });
  }

  async findAll(): Promise<Venta[]> {
    return await prisma.venta.findMany();
  }

  async save(data: Venta) {
    await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
      },
    });
  }

  async update(id: number, data: Venta): Promise<void> {
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
