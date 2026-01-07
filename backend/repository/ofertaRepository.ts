import { prisma } from "../config/db";
import { Oferta } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class OfertaRepository implements Repository<Oferta, number> {
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

  async save(data: Oferta) {
    await prisma.oferta.create({
      data: {
        minKg: data.minKg,
        precio_oferta: data.precio_oferta,
        esta_activo: data.esta_activo,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: Oferta): Promise<void> {
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
