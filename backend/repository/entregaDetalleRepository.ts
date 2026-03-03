import { prisma } from "../config/db";
import { EntregaDetalleInput, EntregaDetalle } from "../utils/contracts";
import { Repository } from "./genericRepository";

class EntregaDetalleRepository implements Repository<EntregaDetalle, number> {
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

  async findByEntregaIdProductoId(
    entregaId: number,
    productoId: number,
  ): Promise<EntregaDetalle | null> {
    const detalle = await prisma.entregaDetalle.findFirst({
      where: {
        producto_id: productoId,
        entrega_id: entregaId,
      },
    });
    return detalle;
  }

  async findByEntregaId(entregaId: number): Promise<EntregaDetalle[]> {
    return await prisma.entregaDetalle.findMany({
      where: {
        entrega_id: entregaId,
      },
    });
  }

  async save(data: EntregaDetalleInput): Promise<EntregaDetalle> {
    const entregaDetalle = await prisma.entregaDetalle.create({
      data: {
        cantidad: data.cantidad,
        precio_compra: data.precio_compra,
        producto_id: data.producto_id,
        entrega_id: data.entrega_id,
      },
    });
    return entregaDetalle;
  }

  async update(id: number, data: EntregaDetalleInput): Promise<EntregaDetalle> {
    const entregaDetalle = await prisma.entregaDetalle.update({
      where: { entregaDetalle_id: id },
      data: {
        cantidad: data.cantidad,
        precio_compra: data.precio_compra,
        producto_id: data.producto_id,
        entrega_id: data.entrega_id,
      },
    });
    return entregaDetalle;
  }

  async delete(id: number): Promise<void> {
    await prisma.entregaDetalle.delete({
      where: {
        entregaDetalle_id: id,
      },
    });
  }
}

const entregaDetalleRepository = new EntregaDetalleRepository();

export default entregaDetalleRepository;
