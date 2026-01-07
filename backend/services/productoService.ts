import productoRepository from "../repository/productoRepository";

interface Producto {
  producto_id: number;
  nombre: string;
  categoria: string;
  stock_actual: number;
  precio_venta: number;
  unidad_medida: string;
}

export const setProducto = async (data: Producto) => {
  return await productoRepository.save(data);
};

export const updateProducto = async (id: number, data: Producto) => {
  return await productoRepository.update(id, data);
};

export const deleteProducto = async (id: number) => {
  return await productoRepository.delete(id);
};

export const getProductoById = async (id: number) => {
  const producto = await productoRepository.findById(id);

  if (!producto) {
    throw new Error("No se encontro el producto");
  }

  return producto;
};

export const getProductos = async () => {
  const productos = await productoRepository.findAll();

  if (productos.length === 0) {
    throw new Error("No hay productos cargados en el sistema");
  }

  return productos;
};
