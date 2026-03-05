import DuplicateResource from "../error/DuplicateResource";
import NotFound from "../error/NotFound";
import { Producto } from "../models/Producto";
import productoRepository from "../repository/productoRepository";
import { ProductoInput, transformToString } from "../utils/contracts";
import { Categoria } from "../utils/tipos";

export const createProducto = async (data: ProductoInput) => {
  const existencia = await productoRepository.findByName(data.nombre);

  if (existencia) {
    throw new DuplicateResource("Producto");
  }

  const producto = Producto.create(
    data.nombre,
    data.categoria,
    data.precio_venta,
    data.unidad_medida,
    data.stock_minimo,
  );

  const categoria = transformToString(producto.categoria);
  const unidad = transformToString(producto.unidad);

  return await productoRepository.save({
    nombre: producto.nombre,
    categoria: categoria,
    stock_minimo: producto.stock_minimo,
    stock_actual: producto.stock_actual,
    precio_venta: producto.precio_venta,
    unidad_medida: unidad,
  });
};

export const updatePrecioVenta = async (id: number, precioNuevo: number) => {
  return await productoRepository.updatePrecioVenta(id, precioNuevo);
};

export const changePrecioVentaByCategoria = async (
  precioNuevo: number,
  categoria: Categoria,
) => {
  return await productoRepository.updatePrecioVentaByCategoria(
    precioNuevo,
    categoria,
  );
};

export const updateCantidad = async (id: number, stockNuevo: number) => {
  return await productoRepository.updateCantidad(id, stockNuevo);
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

export const getProductoByCategoria = async (data: string) => {
  const productos = await productoRepository.filterCatergoria(data);
  return productos;
};
