import { prisma } from "../config/db";
import { VentaInput, Venta, VentaDetalle } from "../utils/contracts";
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

  async save(data: VentaInput): Promise<Venta> {
    const venta = await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
        total: data.total,
      },
    });
    return venta;
  }

  async update(id: number, data: VentaInput): Promise<Venta> {
    const venta = await prisma.venta.update({
      where: { venta_id: id },
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
        total: data.total,
      },
    });
    return venta;
  }

  async updateVendida(id: number): Promise<Venta> {
    const venta = await prisma.venta.update({
      where: { venta_id: id },
      data: {
        esta_vendida: true,
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

  async findDetallesEntrega(id: number): Promise<VentaDetalle[]> {
    const ventaDetalles = prisma.ventaDetalle.findMany({
      where: { venta_id: id },
      include: {
        productos: true,
      },
    });

    return ventaDetalles;
  }
}

const ventaRepository = new VentaRepository();

export default ventaRepository;
