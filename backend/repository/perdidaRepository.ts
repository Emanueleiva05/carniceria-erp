import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type PerdidaPrisma = {
  tirado: number;
  unidad_medida: string;
  fecha_perdida: Date;
  motivo: string | null;
  total: number;
  producto_id: number;
};

class PerdidaRepository implements Repository<PerdidaPrisma, number> {
  async findById(id: number): Promise<PerdidaPrisma | null> {
    return await prisma.perdida.findUnique({
      where: {
        perdida_id: id,
      },
    });
  }

  async findAll(): Promise<PerdidaPrisma[]> {
    return await prisma.perdida.findMany();
  }

  async save(data: PerdidaPrisma) {
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

  async update(id: number, data: PerdidaPrisma): Promise<void> {
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
