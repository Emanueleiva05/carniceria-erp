import { prisma } from "../config/db";
import { CarneInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

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

  async save(data: CarneInput) {
    await prisma.carneDepostada.create({
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: CarneInput): Promise<void> {
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

const carneDepostadaRepository = new CarneDepostadaRepository();

export default carneDepostadaRepository;
