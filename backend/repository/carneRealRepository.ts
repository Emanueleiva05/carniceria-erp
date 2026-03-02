import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type CarnePersistenceInput = {
  nombre: string;
  peso_real: number;
  create_at: Date;
  mediares_id: number;
};

export type CarnePersistence = CarnePersistenceInput & {
  corteReal_id: number;
};

class CorteRealRepository implements Repository<CarnePersistence, number> {
  async findById(id: number): Promise<CarnePersistence | null> {
    return await prisma.corteReal.findUnique({
      where: {
        corteReal_id: id,
      },
    });
  }

  async findAll(): Promise<CarnePersistence[]> {
    return await prisma.corteReal.findMany();
  }

  async save(data: CarnePersistenceInput): Promise<CarnePersistence> {
    const carne = await prisma.corteReal.create({
      data: {
        nombre: data.nombre,
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        create_at: data.create_at,
      },
    });

    return carne;
  }

  async update(
    id: number,
    data: CarnePersistenceInput,
  ): Promise<CarnePersistence> {
    const carne = await prisma.corteReal.update({
      where: { corteReal_id: id },
      data: {
        nombre: data.nombre,
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        create_at: data.create_at,
      },
    });

    return carne;
  }

  async delete(id: number): Promise<void> {
    await prisma.corteReal.delete({
      where: {
        corteReal_id: id,
      },
    });
  }
}

const corteRealRepository = new CorteRealRepository();

export default corteRealRepository;
