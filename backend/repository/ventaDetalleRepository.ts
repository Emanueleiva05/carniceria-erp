import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

export type VentaDetallePersistenceInput = {
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number | null;
};

export type VentaDetallePersistence = VentaDetallePersistenceInput & {
  ventaDetalle_id: number;
};

class VentaDetalleRepository implements Repository<
  VentaDetallePersistence,
  number
> {
  async findById(id: number): Promise<VentaDetallePersistence | null> {
    return await prisma.ventaDetalle.findUnique({
      where: {
        ventaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<VentaDetallePersistence[]> {
    return await prisma.ventaDetalle.findMany();
  }

  async findByEntregaIdProductoId(
    ventaId: number,
    productoId: number,
  ): Promise<VentaDetallePersistence | null> {
    const detalle = await prisma.ventaDetalle.findFirst({
      where: {
        producto_id: productoId,
        venta_id: ventaId,
      },
    });
    return detalle;
  }

  async findByVentaId(ventaId: number): Promise<VentaDetallePersistence[]> {
    return await prisma.ventaDetalle.findMany({
      where: {
        venta_id: ventaId,
      },
    });
  }

  async save(
    data: VentaDetallePersistenceInput,
  ): Promise<VentaDetallePersistence> {
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

  async update(
    id: number,
    data: VentaDetallePersistenceInput,
  ): Promise<VentaDetallePersistence> {
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
