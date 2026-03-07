import { prisma } from "../config/db";
import { Repository } from "./genericRepository";
import { Producto, ProductoInput } from "../utils/contracts";

class ProductoRepository implements Repository<Producto, number> {
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

  async findByName(name: string): Promise<Producto | null> {
    return await prisma.producto.findFirst({
      where: {
        nombre: name,
      },
    });
  }

  async save(data: ProductoInput): Promise<Producto> {
    const producto = await prisma.producto.create({
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        stock_minimo: data.stock_minimo,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
    return producto;
  }

  async update(id: number, data: ProductoInput): Promise<Producto> {
    const producto = await prisma.producto.update({
      where: { producto_id: id },
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        stock_actual: data.stock_actual,
        stock_minimo: data.stock_minimo,
        precio_venta: data.precio_venta,
        unidad_medida: data.unidad_medida,
      },
    });
    return producto;
  }

  async updateStockMinimo(id: number, data: number): Promise<Producto> {
    const producto = await prisma.producto.update({
      where: { producto_id: id },
      data: {
        stock_minimo: data,
      },
    });
    return producto;
  }

  async updatePrecioVenta(id: number, precioNuevo: number) {
    const producto = await prisma.producto.update({
      where: { producto_id: id },
      data: {
        precio_venta: precioNuevo,
      },
    });
    return producto;
  }

  async updatePrecioVentaByCategoria(precioNuevo: number, categoria: string) {
    const producto = await prisma.producto.updateMany({
      where: { categoria: categoria },
      data: {
        precio_venta: { increment: precioNuevo },
      },
    });
    return producto;
  }

  async updateCantidad(id: number, stockNuevo: number): Promise<Producto> {
    const producto = await prisma.producto.update({
      where: { producto_id: id },
      data: {
        stock_actual: stockNuevo,
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

  async filterCatergoria(filter: string): Promise<Producto[]> {
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
