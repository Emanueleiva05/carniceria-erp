import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { Perdida, PerdidaInput } from "../utils/contracts";

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

  async findByLastWeek(): Promise<Perdida[]> {
    const haceUnaSemana = new Date();
    haceUnaSemana.setDate(haceUnaSemana.getDate() - 7);

    return await prisma.perdida.findMany({
      where: {
        fecha_perdida: {
          gte: haceUnaSemana,
        },
      },
    });
  }

  async findByMonth(mes: number, anio: number): Promise<Perdida[]> {
    return await prisma.perdida.findMany({
      where: {
        fecha_perdida: {
          gte: new Date(anio, mes - 1, 1),
          lt: new Date(anio, mes, 1),
        },
      },
    });
  }

  async save(data: PerdidaInput): Promise<Perdida> {
    const perdida = await prisma.perdida.create({
      data: {
        unidad_medida: data.unidad_medida,
        tirado: data.tirado,
        fecha_perdida: data.fecha_perdida,
        motivo: data.motivo,
        total: data.total,
        producto_id: data.producto_id,
      },
    });
    return perdida;
  }

  async update(id: number, data: PerdidaInput): Promise<Perdida> {
    const perdida = await prisma.perdida.update({
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
    return perdida;
  }

  async updateTirado(id: number, data: number): Promise<Perdida> {
    const perdida = await prisma.perdida.update({
      where: { perdida_id: id },
      data: {
        tirado: data,
      },
    });
    return perdida;
  }

  async delete(id: number): Promise<void> {
    await prisma.perdida.delete({
      where: {
        perdida_id: id,
      },
    });
  }

  async findByProductoId(id: number): Promise<Perdida[]> {
    return await prisma.perdida.findMany({
      include: { productos: true },
      where: { producto_id: id },
    });
  }
}

const perdidaRepository = new PerdidaRepository();

export default perdidaRepository;
