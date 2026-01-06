import { prisma } from "../config/db";
import { Mediares } from "@prisma/client";
import { Repository } from "./genericRepository";

export class ProveedorRepository implements Repository<Mediares, number> {
  async findById(id: number): Promise<Mediares | null> {
    return await prisma.mediares.findUnique({
      where: {
        mediares_id: id,
      },
    });
  }

  async findAll(): Promise<Mediares[]> {
    return await prisma.mediares.findMany();
  }

  async save(data: Mediares) {
    await prisma.mediares.create({
      data: {
        peso_carton: data.peso_carton,
        peso_real: data.peso_real,
        tamano: data.tamano,
        precio_compra: data.precio_compra,
        tipo_vaca: data.tipo_vaca,
        entrega_id: data.entrega_id,
      },
    });
  }

  async update(id: number, data: Mediares): Promise<void> {
    await prisma.mediares.update({
      where: { mediares_id: id },
      data: {
        peso_carton: data.peso_carton,
        peso_real: data.peso_real,
        tamano: data.tamano,
        precio_compra: data.precio_compra,
        tipo_vaca: data.tipo_vaca,
        entrega_id: data.entrega_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.mediares.delete({
      where: {
        mediares_id: id,
      },
    });
  }
}
