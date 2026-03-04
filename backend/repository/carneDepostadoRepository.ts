import { prisma } from "../config/db";
import { CarneInput, Carne } from "../utils/contracts";
import { Repository } from "./genericRepository";

class CarneDepostadaRepository implements Repository<Carne, number> {
  async findById(id: number): Promise<Carne | null> {
    return await prisma.carneDepostada.findUnique({
      where: {
        carne_id: id,
      },
    });
  }

  async findAll(): Promise<Carne[]> {
    return await prisma.carneDepostada.findMany();
  }

  async findByProductoIdMediaresId(
    mediaresId: number,
    productoId: number,
  ): Promise<Carne | null> {
    const carne = await prisma.carneDepostada.findFirst({
      where: {
        producto_id: productoId,
        mediares_id: mediaresId,
      },
    });
    return carne;
  }

  async save(data: CarneInput): Promise<Carne> {
    const carne = await prisma.carneDepostada.create({
      data: {
        peso_real: data.peso_real,
        mediares_id: data.mediares_id,
        producto_id: data.producto_id,
      },
    });

    return carne;
  }

  async update(id: number, data: CarneInput): Promise<Carne> {
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
