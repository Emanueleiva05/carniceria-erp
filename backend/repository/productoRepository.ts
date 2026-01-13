import { prisma } from "../config/db";
import { Repository } from "./genericRepository";

type ProductoPrisma = {
  nombre: string;
  categoria: string;
  stock_actual: number;
  precio_venta: number;
  unidad_medida: string;
};

class ProductoRepository implements Repository<ProductoPrisma, number> {
  async findById(id: number): Promise<ProductoPrisma | null> {
    return await prisma.producto.findUnique({
      where: {
        producto_id: id,
      },
    });
  }

  async findAll(): Promise<ProductoPrisma[]> {
    return await prisma.producto.findMany();
  }

  async save(data: ProductoPrisma) {
    await prisma.producto.create({
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
  }

  async update(id: number, data: ProductoPrisma): Promise<void> {
    await prisma.producto.update({
      where: { producto_id: id },
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.producto.delete({
      where: {
        producto_id: id,
      },
    });
  }
}

const productoRepository = new ProductoRepository();

export default productoRepository;
