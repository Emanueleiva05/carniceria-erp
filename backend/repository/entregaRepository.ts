import { prisma } from "../config/db";
import { EntregaInput, Entrega, EntregaDetalle } from "../utils/contracts";
import { Repository } from "./genericRepository";

class EntregaRepository implements Repository<Entrega, number> {
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

  async save(data: EntregaInput): Promise<Entrega> {
    const entrega = await prisma.entrega.create({
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
    return entrega;
  }

  async update(id: number, data: EntregaInput): Promise<Entrega> {
    const entrega = await prisma.entrega.update({
      where: { entrega_id: id },
      data: {
        fecha_entrega: data.fecha_entrega,
        total: data.total,
        pago: data.pago,
        factura: data.factura,
        proveedor_id: data.proveedor_id,
      },
    });
    return entrega;
  }

  async updateFactura(id: number, data: string): Promise<Entrega> {
    const entrega = await prisma.entrega.update({
      where: { entrega_id: id },
      data: {
        factura: data,
      },
    });
    return entrega;
  }

  async updatePago(id: number, data: boolean): Promise<Entrega> {
    const entrega = await prisma.entrega.update({
      where: { entrega_id: id },
      data: {
        pago: data,
      },
    });
    return entrega;
  }

  async delete(id: number): Promise<void> {
    await prisma.entrega.delete({
      where: {
        entrega_id: id,
      },
    });
  }

  async findDetallesEntrega(id: number): Promise<EntregaDetalle[]> {
    const entregaDetalles = prisma.entregaDetalle.findMany({
      where: { entrega_id: id },
      include: {
        productos: true,
      },
    });

    return entregaDetalles;
  }
}

const entregaRepository = new EntregaRepository();

export default entregaRepository;
