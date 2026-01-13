import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type OfertaPrisma = {
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
};

class OfertaRepository implements Repository<OfertaPrisma, number> {
  async findById(id: number): Promise<OfertaPrisma | null> {
    return await prisma.oferta.findUnique({
      where: {
        oferta_id: id,
      },
    });
  }

  async findAll(): Promise<OfertaPrisma[]> {
    return await prisma.oferta.findMany();
  }

  async save(data: OfertaPrisma) {
    await prisma.oferta.create({
      data: {
        minKg: data.minKg,
        precio_oferta: data.precio_oferta,
        esta_activo: data.esta_activo,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: OfertaPrisma): Promise<void> {
    await prisma.oferta.update({
      where: { oferta_id: id },
      data: {
        minKg: data.minKg,
        precio_oferta: data.precio_oferta,
        esta_activo: data.esta_activo,
        producto_id: data.producto_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.oferta.delete({
      where: {
        oferta_id: id,
      },
    });
  }
}

const ofertaRepository = new OfertaRepository();

export default ofertaRepository;
