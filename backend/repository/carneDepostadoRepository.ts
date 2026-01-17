import { prisma } from "../config/db";
import { CarneInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

export type CarnePrisma = {
  carne_id: number;
  peso_real: number;
  producto_id: number;
  mediares_id: number;
};

class CarneDepostadaRepository implements Repository<CarneInput, number> {
  async findById(id: number): Promise<CarneInput | null> {
    return await prisma.carneDepostada.findUnique({
      where: {
        carne_id: id,
      },
    });
  }

  async findAll(): Promise<CarneInput[]> {
    return await prisma.carneDepostada.findMany();
  }

  async findByProductoIdMediaresId(
    mediaresId: number,
    productoId: number
  ): Promise<CarnePrisma | null> {
    const carne = await prisma.carneDepostada.findFirst({
      where: {
        producto_id: productoId,
        mediares_id: mediaresId,
      },
    });
    return carne;
  }

  async save(data: CarneInput): Promise<CarnePrisma> {
    const carne = await prisma.carneDepostada.create({
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });

    return carne;
  }

  async update(id: number, data: CarneInput): Promise<CarnePrisma> {
    const carne = await prisma.carneDepostada.update({
      where: { carne_id: id },
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });

    return carne;
  }

  async delete(id: number): Promise<void> {
    await prisma.carneDepostada.delete({
      where: {
        carne_id: id,
      },
    });
  }
}

const carneDepostadaRepository = new CarneDepostadaRepository();

export default carneDepostadaRepository;
