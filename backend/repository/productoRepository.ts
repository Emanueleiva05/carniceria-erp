import { prisma } from "../config/db";
import { Producto } from "@prisma/client";
import { Repository } from "./genericRepository";

export default class ProductoRepository
  implements Repository<Producto, number>
{
  async findById(id: number): Promise<Producto | null> {
    return await prisma.producto.findUnique({
      where: {
        producto_id: id,
      },
    });
  }

  async findAll(): Promise<Producto[]> {
    return await prisma.producto.findMany();
  }

  async save(data: Producto) {
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

  async update(id: number, data: Producto): Promise<void> {
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
