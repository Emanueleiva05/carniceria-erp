import proveedorRepository from "../repository/proveedorRepository";

interface Proveedor {
  proveedor_id: number;
  nombre: string;
  telefono: string;
}

export const setProveedores = async (data: Proveedor) => {
  return await proveedorRepository.save(data);
};

export const updateProveedores = async (id: number, data: Proveedor) => {
  return await proveedorRepository.update(id, data);
};

export const deleteProveedores = async (id: number) => {
  return await proveedorRepository.delete(id);
};

export const getProveedoresById = async (id: number) => {
  const proveedor = await proveedorRepository.findById(id);

  if (!proveedor) {
    throw new Error("No se encontro el proveedor");
  }

  return proveedor;
};

export const getProveedores = async () => {
  const proveedores = await proveedorRepository.findAll();

  if (proveedores.length === 0) {
    throw new Error("No hay proveedores cargados en el sistema");
  }

  return proveedores;
};
