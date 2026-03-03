import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { CorteReal, CorteRealInput } from "../utils/contracts";

class CorteRealRepository implements Repository<CorteReal, number> {
  async findById(id: number): Promise<CorteReal | null> {
    return await prisma.corteReal.findUnique({
      where: {
        corteReal_id: id,
      },
    });
  }

  async findAll(): Promise<CorteReal[]> {
    return await prisma.corteReal.findMany();
  }

  async save(data: CorteRealInput): Promise<CorteReal> {
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

  async update(id: number, data: CorteRealInput): Promise<CorteReal> {
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
