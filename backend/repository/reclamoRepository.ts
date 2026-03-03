import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { Reclamo, ReclamoInput } from "../utils/contracts";

type ReclamoAccept = {
  estado: string;
};

class ReclamoRepository implements Repository<Reclamo, number> {
  async findById(id: number): Promise<Reclamo | null> {
    return await prisma.reclamo.findUnique({
      where: {
        reclamo_id: id,
      },
    });
  }

  async findAll(): Promise<Reclamo[]> {
    return await prisma.reclamo.findMany();
  }

  async findByProveedor(proveedorId: number): Promise<Reclamo[]> {
    return await prisma.reclamo.findMany({
      where: {
        proveedor_id: proveedorId,
      },
    });
  }

  async save(data: ReclamoInput): Promise<Reclamo> {
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

  async update(id: number, data: ReclamoInput): Promise<Reclamo> {
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

  async updateEstado(id: number, data: ReclamoAccept): Promise<Reclamo> {
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
