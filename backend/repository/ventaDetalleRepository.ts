import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type VentaDetallePrisma = {
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number | null;
};

class VentaDetalleRepository implements Repository<VentaDetallePrisma, number> {
  async findById(id: number): Promise<VentaDetallePrisma | null> {
    return await prisma.ventaDetalle.findUnique({
      where: {
        ventaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<VentaDetallePrisma[]> {
    return await prisma.ventaDetalle.findMany();
  }

  async save(data: VentaDetallePrisma) {
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

  async update(id: number, data: VentaDetallePrisma): Promise<void> {
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

const ventaDetalleRepository = new VentaDetalleRepository();

export default ventaDetalleRepository;
