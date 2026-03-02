import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type ReclamoAccept = {
  estado: string;
};

export type ReclamoPersistenceInput = {
  fecha_reclamo: Date;
  motivo: string;
  estado: string;
  cantidad: number;
  producto_destino_id: number | null;
  diferencia_cantidad: number | null;
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

  async findByProveedor(proveedorId: number): Promise<ReclamoPersistence[]> {
    return await prisma.reclamo.findMany({
      where: {
        proveedor_id: proveedorId,
      },
    });
  }

  async save(data: ReclamoPersistenceInput): Promise<ReclamoPersistence> {
    const reclamo = await prisma.reclamo.create({
      data: {
        fecha_reclamo: data.fecha_reclamo,
        motivo: data.motivo,
        estado: data.estado,
        cantidad: data.cantidad,
        diferencia_cantidad: data.diferencia_cantidad,
        producto_destino_id: data.producto_destino_id,
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
        cantidad: data.cantidad,
        diferencia_cantidad: data.diferencia_cantidad,
        producto_destino_id: data.producto_destino_id,
        descripcion: data.descripcion,
        evidencia: data.evidencia,
        producto_id: data.producto_id,
        proveedor_id: data.proveedor_id,
      },
    });
    return reclamo;
  }

  async updateEstado(
    id: number,
    data: ReclamoAccept,
  ): Promise<ReclamoPersistence> {
    const reclamo = await prisma.reclamo.update({
      where: { reclamo_id: id },
      data: {
        estado: data.estado,
      },
    });
    return reclamo;
  }

  async delete(id: number): Promise<void> {
    await prisma.reclamo.delete({
      where: {
        reclamo_id: id,
      },
    });
  }
}

const reclamoRepository = new ReclamoRepository();

export default reclamoRepository;
