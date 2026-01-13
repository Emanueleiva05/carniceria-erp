import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type ProveedorPrisma = {
  nombre: string;
  telefono: string;
};

class ProveedorRepository implements Repository<ProveedorPrisma, number> {
  async findById(id: number): Promise<ProveedorPrisma | null> {
    return await prisma.proveedor.findUnique({
      where: {
        proveedor_id: id,
      },
    });
  }

  async findAll(): Promise<ProveedorPrisma[]> {
    return await prisma.proveedor.findMany();
  }

  async save(data: ProveedorPrisma) {
    await prisma.proveedor.create({
      data: { nombre: data.nombre, telefono: data.telefono },
    });
  }

  async update(id: number, data: ProveedorPrisma): Promise<void> {
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

const proveedorRepository = new ProveedorRepository();

export default proveedorRepository;
