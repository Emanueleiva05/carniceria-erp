import { prisma } from "../config/db";
import { EntregaDetalleInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

export type EntregaDetallePrisma = {
  producto_id: number;
  entregaDetalle_id: number;
  cantidad: number;
  precio_compra: number;
  entrega_id: number;
};

class EntregaDetalleRepository
  implements Repository<EntregaDetalleInput, number>
{
  async findById(id: number): Promise<EntregaDetalleInput | null> {
    return await prisma.entregaDetalle.findUnique({
      where: {
        entregaDetalle_id: id,
      },
    });
  }

  async findAll(): Promise<EntregaDetalleInput[]> {
    return await prisma.entregaDetalle.findMany();
  }

  async save(data: EntregaDetalleInput): Promise<EntregaDetallePrisma> {
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

  async update(
    id: number,
    data: EntregaDetalleInput
  ): Promise<EntregaDetallePrisma> {
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
