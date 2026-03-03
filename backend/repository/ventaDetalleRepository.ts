import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { VentaDetalle, VentaDetalleInput } from "../utils/contracts";

class VentaDetalleRepository implements Repository<VentaDetalle, number> {
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

  async findByEntregaIdProductoId(
    ventaId: number,
    productoId: number,
  ): Promise<VentaDetalle | null> {
    const detalle = await prisma.ventaDetalle.findFirst({
      where: {
        producto_id: productoId,
        venta_id: ventaId,
      },
    });
    return detalle;
  }

  async findByVentaId(ventaId: number): Promise<VentaDetalle[]> {
    return await prisma.ventaDetalle.findMany({
      where: {
        venta_id: ventaId,
      },
    });
  }

  async save(data: VentaDetalleInput): Promise<VentaDetalle> {
    const ventaDetalle = await prisma.ventaDetalle.create({
      data: {
        precio_unitario: data.precio_unitario,
        subtotal: data.subtotal,
        cantidad: data.cantidad,
        producto_id: data.producto_id,
        venta_id: data.venta_id,
        oferta_id: data.oferta_id,
      },
    });
    return ventaDetalle;
  }

  async update(id: number, data: VentaDetalleInput): Promise<VentaDetalle> {
    const ventaDetalle = await prisma.ventaDetalle.update({
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
    return ventaDetalle;
  }

  async updateCantidad(id: number, cantidad: number, subtotal: number) {
    return await prisma.ventaDetalle.update({
      where: {
        ventaDetalle_id: id,
      },
      data: {
        cantidad: cantidad,
        subtotal: subtotal,
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

const ventaDetalleRepository = new VentaDetalleRepository();

export default ventaDetalleRepository;
