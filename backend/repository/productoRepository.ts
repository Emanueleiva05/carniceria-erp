import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type ProductoPersistenceInput = {
  nombre: string;
  categoria: string;
  stock_actual: number;
  precio_venta: number;
  unidad_medida: string;
};

type ProductoPersistence = ProductoPersistenceInput & {
  producto_id: number;
};

class ProductoRepository implements Repository<ProductoPersistence, number> {
  async findById(id: number): Promise<ProductoPersistence | null> {
    return await prisma.producto.findUnique({
      where: {
        producto_id: id,
      },
    });
  }

  async findAll(): Promise<ProductoPersistence[]> {
    return await prisma.producto.findMany();
  }

  async findByName(name: string): Promise<ProductoPersistence | null> {
    return await prisma.producto.findFirst({
      where: {
        nombre: name,
      },
    });
  }

  async save(data: ProductoPersistenceInput): Promise<ProductoPersistence> {
    const producto = await prisma.producto.create({
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
    return producto;
  }

  async update(
    id: number,
    data: ProductoPersistenceInput
  ): Promise<ProductoPersistence> {
    const producto = await prisma.producto.update({
      where: { producto_id: id },
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
    return producto;
  }

  async delete(id: number): Promise<void> {
    await prisma.producto.delete({
      where: {
        producto_id: id,
      },
    });
  }

  async filterCatergoria(filter: string): Promise<ProductoPersistence[]> {
    return await prisma.producto.findMany({
      where: {
        categoria: {
          contains: filter,
        },
      },
    });
  }
}

const productoRepository = new ProductoRepository();

export default productoRepository;
