import { prisma } from "../config/db";
import { VentaDetalleInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

type VentaDetallePrisma = {
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number | null;
};

class VentaDetalleRepository implements Repository<VentaDetalleInput, number> {
  async findById(id: number): Promise<VentaDetalleInput | null> {
    return await prisma.ventaDetalle.findUnique({
      where: {
        ventaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<VentaDetalleInput[]> {
    return await prisma.ventaDetalle.findMany();
  }

  async save(data: VentaDetalleInput): Promise<VentaDetallePrisma> {
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
    data: VentaDetalleInput
  ): Promise<VentaDetallePrisma> {
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
