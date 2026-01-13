import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type MediarePrisma = {
  peso_carton: number;
  peso_real: number;
  tamano: number;
  precio_compra: number;
  tipo_vaca: string;
  entrega_id: number;
};

class MediaresRepository implements Repository<MediarePrisma, number> {
  async findById(id: number): Promise<MediarePrisma | null> {
    return await prisma.mediares.findUnique({
      where: {
        mediares_id: id,
      },
    });
  }

  async findAll(): Promise<MediarePrisma[]> {
    return await prisma.mediares.findMany();
  }

  async save(data: MediarePrisma) {
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

  async update(id: number, data: MediarePrisma): Promise<void> {
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

const mediaresRepository = new MediaresRepository();

export default mediaresRepository;
