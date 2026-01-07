import { prisma } from "../config/db";
import { Perdida } from "@prisma/client";
import { Repository } from "./genericRepository";

class PerdidaRepository implements Repository<Perdida, number> {
  async findById(id: number): Promise<Perdida | null> {
    return await prisma.perdida.findUnique({
      where: {
        perdida_id: id,
      },
    });
  }

  async findAll(): Promise<Perdida[]> {
    return await prisma.perdida.findMany();
  }

  async save(data: Perdida) {
    await prisma.perdida.create({
      data: {
        unidad_medida: data.unidad_medida,
        tirado: data.tirado,
        fecha_perdida: data.fecha_perdida,
        motivo: data.motivo,
        total: data.total,
        producto_id: data.producto_id,
      },
    });
  }

  async update(id: number, data: Perdida): Promise<void> {
    await prisma.perdida.update({
      where: { perdida_id: id },
      data: {
        unidad_medida: data.unidad_medida,
        tirado: data.tirado,
        fecha_perdida: data.fecha_perdida,
        motivo: data.motivo,
        total: data.total,
        producto_id: data.producto_id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.perdida.delete({
      where: {
        perdida_id: id,
      },
    });
  }
}

const perdidaRepository = new PerdidaRepository();

export default perdidaRepository;
