import { prisma } from "../config/db";
import { CarneDepostada } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class CarneDepostadaRepository
  implements Repository<CarneDepostada, number>
{
  async findById(id: number): Promise<CarneDepostada | null> {
    return await prisma.carneDepostada.findUnique({
      where: {
        carne_id: id,
      },
    });
  }

  async findAll(): Promise<CarneDepostada[]> {
    return await prisma.carneDepostada.findMany();
  }

  async save(data: CarneDepostada) {
    await prisma.carneDepostada.create({
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: CarneDepostada): Promise<void> {
    await prisma.carneDepostada.update({
      where: { carne_id: id },
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.carneDepostada.delete({
      where: {
        carne_id: id,
      },
    });
  }
}
