import { prisma } from "../config/db";
import { ProveedorInput, Proveedor } from "../utils/contracts";
import { Repository } from "./genericRepository";
import { Entrega } from "../utils/contracts";

class ProveedorRepository implements Repository<Proveedor, number> {
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

  async findByName(name: string): Promise<Proveedor | null> {
    return await prisma.proveedor.findFirst({
      where: {
        nombre: name,
      },
    });
  }

  async save(data: ProveedorInput): Promise<Proveedor> {
    const proveedor = await prisma.proveedor.create({
      data: { nombre: data.nombre, telefono: data.telefono },
    });
    return proveedor;
  }

  async update(id: number, data: ProveedorInput): Promise<Proveedor> {
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

  async findEntregasByProveedor(id: number): Promise<Entrega[]> {
    const entregas = await prisma.entrega.findMany({
      where: { proveedor_id: id },
    });

    return entregas;
  }
}

const proveedorRepository = new ProveedorRepository();

export default proveedorRepository;
