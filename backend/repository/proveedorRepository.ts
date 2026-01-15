import { prisma } from "../config/db";
import { ProveedorInput } from "../utils/contracts";
import { Repository } from "./genericRepository";

type ProveedorPrisma = {
  proveedor_id: number;
  nombre: string;
  telefono: string;
};

class ProveedorRepository implements Repository<ProveedorInput, number> {
  async findById(id: number): Promise<ProveedorInput | null> {
    return await prisma.proveedor.findUnique({
      where: {
        proveedor_id: id,
      },
    });
  }

  async findAll(): Promise<ProveedorInput[]> {
    return await prisma.proveedor.findMany();
  }

  async save(data: ProveedorInput): Promise<ProveedorPrisma> {
    const proveedor = await prisma.proveedor.create({
      data: { nombre: data.nombre, telefono: data.telefono },
    });
    return proveedor;
  }

  async update(id: number, data: ProveedorInput): Promise<ProveedorPrisma> {
    const proveedor = await prisma.proveedor.update({
      where: { proveedor_id: id },
      data: {
        nombre: data.nombre,
        telefono: data.telefono,
      },
    });
    return proveedor;
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
