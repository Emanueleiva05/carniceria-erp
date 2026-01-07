import { prisma } from "../config/db";
import { EntregaDetalle } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class EntregaDetalleRepository
  implements Repository<EntregaDetalle, number>
{
  async findById(id: number): Promise<EntregaDetalle | null> {
    return await prisma.entregaDetalle.findUnique({
      where: {
        entregaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<EntregaDetalle[]> {
    return await prisma.entregaDetalle.findMany();
  }

  async save(data: EntregaDetalle) {
    await prisma.entregaDetalle.create({
      data: {
        cantidad: data.cantidad,
        precio_compra: data.precio_compra,
        producto_id: data.producto_id,
        entrega_id: data.entrega_id,
      },
    });
  }

  async update(id: number, data: EntregaDetalle): Promise<void> {
    await prisma.entregaDetalle.update({
      where: { entregaDetalle_id: id },
      data: {
        cantidad: data.cantidad,
        precio_compra: data.precio_compra,
        producto_id: data.producto_id,
        entrega_id: data.entrega_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.entregaDetalle.delete({
      where: {
        entregaDetalle_id: id,
      },
    });
  }
}
