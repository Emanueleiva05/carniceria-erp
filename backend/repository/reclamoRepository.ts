import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

export type ReclamoPersistenceInput = {
  fecha_reclamo: Date;
  motivo: string;
  estado: string;
  genera_perdida: boolean;
  genera_compensacion: boolean;
  descripcion: string | null;
  evidencia: string | null;
  producto_id: number;
  proveedor_id: number;
};

export type ReclamoPersistence = ReclamoPersistenceInput & {
  reclamo_id: number;
};

class ReclamoRepository implements Repository<ReclamoPersistence, number> {
  async findById(id: number): Promise<ReclamoPersistence | null> {
    return await prisma.reclamo.findUnique({
      where: {
        reclamo_id: id,
      },
    });
  }

  async findAll(): Promise<ReclamoPersistence[]> {
    return await prisma.reclamo.findMany();
  }

  async save(data: ReclamoPersistenceInput): Promise<ReclamoPersistence> {
    const reclamo = await prisma.reclamo.create({
      data: {
        fecha_reclamo: data.fecha_reclamo,
        motivo: data.motivo,
        estado: data.estado,
        genera_compensacion: data.genera_compensacion,
        genera_perdida: data.genera_perdida,
        descripcion: data.descripcion,
        evidencia: data.evidencia,
        producto_id: data.producto_id,
        proveedor_id: data.proveedor_id,
      },
    });
    return reclamo;
  }

  async update(
    id: number,
    data: ReclamoPersistenceInput,
  ): Promise<ReclamoPersistence> {
    const reclamo = await prisma.reclamo.update({
      where: { reclamo_id: id },
      data: {
        fecha_reclamo: data.fecha_reclamo,
        motivo: data.motivo,
        estado: data.estado,
        genera_compensacion: data.genera_compensacion,
        genera_perdida: data.genera_perdida,
        descripcion: data.descripcion,
        evidencia: data.evidencia,
        producto_id: data.producto_id,
        proveedor_id: data.proveedor_id,
      },
    });
    return reclamo;
  }

  async delete(id: number): Promise<void> {
    await prisma.proveedor.delete({
      where: {
        proveedor_id: id,
      },
    });
  }
}

const reclamoRepository = new ReclamoRepository();

export default reclamoRepository;
