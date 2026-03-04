import { prisma } from "../config/db";
import { OfertaInput, Oferta } from "../utils/contracts";
import { Repository } from "./genericRepository";

class OfertaRepository implements Repository<Oferta, number> {
  async findById(id: number): Promise<Oferta | null> {
    return await prisma.oferta.findUnique({
      where: {
        oferta_id: id,
      },
    });
  }

  async findAll(): Promise<Oferta[]> {
    return await prisma.oferta.findMany();
  }

  async save(data: OfertaInput): Promise<Oferta> {
    const oferta = await prisma.oferta.create({
      data: {
        minKg: data.minKg,
        precio_oferta: data.precio_oferta,
        esta_activo: data.esta_activo,
        producto_id: data.producto_id,
      },
    });
    return oferta;
  }

  async update(id: number, data: OfertaInput): Promise<Oferta> {
    const oferta = await prisma.oferta.update({
      where: { oferta_id: id },
      data: {
        minKg: data.minKg,
        precio_oferta: data.precio_oferta,
        esta_activo: data.esta_activo,
        producto_id: data.producto_id,
      },
    });
    return oferta;
  }

  async delete(id: number): Promise<void> {
    await prisma.oferta.delete({
      where: {
        oferta_id: id,
      },
    });
  }

  async findByEstadoActivo(): Promise<Oferta[]> {
    return await prisma.oferta.findMany({
      where: {
        esta_activo: true,
      },
    });
  }

  async findByProductoId(id: number): Promise<Oferta[]> {
    return await prisma.oferta.findMany({
      include: { producto: true },
      where: { producto_id: id },
    });
  }

  async findByEstadoActivoProductoId(
    productoId: number,
  ): Promise<Oferta | null> {
    return await prisma.oferta.findFirst({
      where: {
        esta_activo: true,
        producto_id: productoId,
      },
    });
  }
}

const ofertaRepository = new OfertaRepository();

export default ofertaRepository;
