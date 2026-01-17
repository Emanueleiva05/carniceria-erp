import { prisma } from "../config/db";
import { CarnePrisma } from "./carneDepostadoRepository";
import { Repository } from "./genericRepository";

type MediaresPersistenceInput = {
  peso_carton: number;
  peso_real: number;
  tamano: number;
  precio_compra: number;
  tipo_vaca: string;
  entrega_id: number;
};

type MediaresPersistence = MediaresPersistenceInput & {
  mediares_id: number;
};

class MediaresRepository implements Repository<MediaresPersistence, number> {
  async findById(id: number): Promise<MediaresPersistence | null> {
    return await prisma.mediares.findUnique({
      where: {
        mediares_id: id,
      },
    });
  }

  async findAll(): Promise<MediaresPersistence[]> {
    return await prisma.mediares.findMany();
  }

  async save(data: MediaresPersistenceInput): Promise<MediaresPersistence> {
    const mediares = await prisma.mediares.create({
      data: {
        peso_carton: data.peso_carton,
        peso_real: data.peso_real,
        tamano: data.tamano,
        precio_compra: data.precio_compra,
        tipo_vaca: data.tipo_vaca,
        entrega_id: data.entrega_id,
      },
    });
    return mediares;
  }

  async update(
    id: number,
    data: MediaresPersistenceInput
  ): Promise<MediaresPersistence> {
    const mediares = await prisma.mediares.update({
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
    return mediares;
  }

  async delete(id: number): Promise<void> {
    await prisma.mediares.delete({
      where: {
        mediares_id: id,
      },
    });
  }

  async findCarneByMediares(id: number): Promise<CarnePrisma[]> {
    const carnes = await prisma.carneDepostada.findMany({
      where: {
        mediares_id: id,
      },
    });
    return carnes;
  }
}

const mediaresRepository = new MediaresRepository();

export default mediaresRepository;
