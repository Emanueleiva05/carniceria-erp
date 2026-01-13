import { prisma } from "../config/db";
import { EntregaDetalleInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

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

  async save(data: EntregaDetalleInput) {
    await prisma.entregaDetalle.create({
      data: {
        cantidad: data.cantidad,
        precio_compra: data.precio_compra,
        producto_id: data.producto_id,
        entrega_id: data.entrega_id,
      },
    });
  }

  async update(id: number, data: EntregaDetalleInput): Promise<void> {
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

const entregaDetalleRepository = new EntregaDetalleRepository();

export default entregaDetalleRepository;
