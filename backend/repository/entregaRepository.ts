import { prisma } from "../config/db";
import { EntregaInput } from "../utils/contracts";
import { EntregaDetallePrisma } from "./entregaDetalleRepository";
import { Repository } from "./genericRepository";

export type EntregaPrisma = {
  entrega_id: number;
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string | null;
  proveedor_id: number;
};

class EntregaRepository implements Repository<EntregaPrisma, number> {
  async findById(id: number): Promise<EntregaPrisma | null> {
    return await prisma.entrega.findUnique({
      where: {
        entrega_id: id,
      },
    });
  }

  async findAll(): Promise<EntregaPrisma[]> {
    return await prisma.entrega.findMany();
  }

  async save(data: EntregaInput): Promise<EntregaPrisma> {
    const entrega = await prisma.entrega.create({
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
    return entrega;
  }

  async update(id: number, data: EntregaInput): Promise<EntregaPrisma> {
    const entrega = await prisma.entrega.update({
      where: { entrega_id: id },
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
    return entrega;
  }

  async delete(id: number): Promise<void> {
    await prisma.entrega.delete({
      where: {
        entrega_id: id,
      },
    });
  }

  async findDetallesVenta(id: number): Promise<EntregaDetallePrisma[]> {
    const entregaDetalles = prisma.entregaDetalle.findMany({
      where: { entrega_id: id },
      include: {
        productos: true,
      },
    });

    return entregaDetalles;
  }
}

const entregaRepository = new EntregaRepository();

export default entregaRepository;
