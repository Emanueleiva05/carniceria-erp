import { prisma } from "../config/db";
import { VentaDetalle } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class VentaDetalleRepository
  implements Repository<VentaDetalle, number>
{
  async findById(id: number): Promise<VentaDetalle | null> {
    return await prisma.ventaDetalle.findUnique({
      where: {
        ventaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<VentaDetalle[]> {
    return await prisma.ventaDetalle.findMany();
  }

  async save(data: VentaDetalle) {
    await prisma.ventaDetalle.create({
      data: {
        precio_unitario: data.precio_unitario,
        subtotal: data.subtotal,
        cantidad: data.cantidad,
        producto_id: data.producto_id,
        venta_id: data.venta_id,
        oferta_id: data.oferta_id,
      },
    });
  }

  async update(id: number, data: VentaDetalle): Promise<void> {
    await prisma.ventaDetalle.update({
      where: { ventaDetalle_id: id },
      data: {
        precio_unitario: data.precio_unitario,
        subtotal: data.subtotal,
        cantidad: data.cantidad,
        producto_id: data.producto_id,
        venta_id: data.venta_id,
        oferta_id: data.oferta_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.ventaDetalle.delete({
      where: {
        ventaDetalle_id: id,
      },
    });
  }
}
