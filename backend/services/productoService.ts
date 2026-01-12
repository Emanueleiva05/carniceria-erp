import NotFound from "../error/NotFound";
import { Producto } from "../models/Producto";
import productoRepository from "../repository/productoRepository";
import { Categoria, UnidadMedida } from "../utils/tipos";

interface ProductoInput {
  producto_id: number;
  nombre: string;
  categoria: Categoria;
  stock_actual: number;
  precio_venta: number;
  unidad_medida: UnidadMedida;
}

export const setProducto = async (data: ProductoInput) => {
  return await productoRepository.save(data);
};

export const updateProducto = async (id: number, data: ProductoInput) => {
  return await productoRepository.update(id, data);
};

export const deleteProducto = async (id: number) => {
  return await productoRepository.delete(id);
};

export const getProductoById = async (id: number) => {
  const producto = await productoRepository.findById(id);

  if (!producto) {
    throw new NotFound("Producto");
  }

  return producto;
};

export const getProductos = async () => {
  const productos = await productoRepository.findAll();
  return productos;
};

const buildProducto = (data: ProductoInput) => {
  return new Producto(
    data.producto_id,
    data.nombre,
    data.categoria,
    data.stock_actual,
    data.precio_venta,
    data.unidad_medida
  );
};
