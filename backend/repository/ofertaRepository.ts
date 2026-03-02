import { prisma } from "../config/db";
import { OfertaInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

export type OfertaPrisma = {
  oferta_id: number;
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
};

class OfertaRepository implements Repository<OfertaInput, number> {
  async findById(id: number): Promise<OfertaPrisma | null> {
    return await prisma.oferta.findUnique({
      where: {
        oferta_id: id,
      },
    });
  }

  async findAll(): Promise<OfertaInput[]> {
    return await prisma.oferta.findMany();
  }

  async save(data: OfertaInput): Promise<OfertaPrisma> {
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

  async update(id: number, data: OfertaInput): Promise<OfertaPrisma> {
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

  async findByEstadoActivo(): Promise<OfertaPrisma[]> {
    return await prisma.oferta.findMany({
      where: {
        esta_activo: true,
      },
    });
  }

  async findByProductoId(id: number): Promise<OfertaPrisma[]> {
    return await prisma.oferta.findMany({
      include: { producto: true },
      where: { producto_id: id },
    });
  }

  async findByEstadoActivoProductoId(
    productoId: number,
  ): Promise<OfertaPrisma | null> {
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
