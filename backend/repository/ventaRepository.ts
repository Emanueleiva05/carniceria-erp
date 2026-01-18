import { prisma } from "../config/db";
import { VentaInput } from "../utils/contracts";
import { Repository } from "./genericRepository";
import { VentaDetallePrisma } from "./ventaDetalleRepository";

type VentaPrisma = {
  venta_id: number;
  fecha_venta: Date;
  total: number;
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

  async save(data: VentaInput): Promise<VentaPrisma> {
    const venta = await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        esta_vendida: data.esta_vendida,
        total: data.total,
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
        total: data.total,
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

  async findDetallesEntrega(id: number): Promise<VentaDetallePrisma[]> {
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
