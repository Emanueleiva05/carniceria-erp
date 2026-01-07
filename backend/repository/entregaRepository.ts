import { prisma } from "../config/db";
import { Entrega } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class EntregaDetalleRepository
  implements Repository<Entrega, number>
{
  async findById(id: number): Promise<Entrega | null> {
    return await prisma.entrega.findUnique({
      where: {
        entrega_id: id,
      },
    });
  }

  async findAll(): Promise<Entrega[]> {
    return await prisma.entrega.findMany();
  }

  async save(data: Entrega) {
    await prisma.entrega.create({
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
  }

  async update(id: number, data: Entrega): Promise<void> {
    await prisma.entrega.update({
      where: { entrega_id: id },
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.entrega.delete({
      where: {
        entrega_id: id,
      },
    });
  }
}
