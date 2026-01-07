import { prisma } from "../config/db";
import { Proveedor } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class ProveedorRepository
  implements Repository<Proveedor, number>
{
  async findById(id: number): Promise<Proveedor | null> {
    return await prisma.proveedor.findUnique({
      where: {
        proveedor_id: id,
      },
    });
  }

  async findAll(): Promise<Proveedor[]> {
    return await prisma.proveedor.findMany();
  }

  async save(data: Proveedor) {
    await prisma.proveedor.create({
      data: { nombre: data.nombre, telefono: data.telefono },
    });
  }

  async update(id: number, data: Proveedor): Promise<void> {
    await prisma.proveedor.update({
      where: { proveedor_id: id },
      data: {
        nombre: data.nombre,
        telefono: data.telefono,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.proveedor.delete({
      where: {
        proveedor_id: id,
      },
    });
  }
}
